//カテゴリ別記事一覧ページ（/category/[category]/page/[number]/page.tsx）
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import { ArticleType, ArticleType_en, CategoryType } from "@/types/blog";

type paramsType = {
  category: string;
  number: string;
};

const PER_PAGE = 8;

//generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { categories, totalCount } = await getList();
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = categories.flatMap((category: CategoryType) =>
    range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => ({
      category: category.category,
      number: number.toString(),
    }))
  );
  return [...paths];
}

//generateMetadata : Metadataのtitleタグにカテゴリのタイトルを動的に入れる
export async function generateMetadata({
  params: { category, lng },
}: {
  params: { category: string; lng: string };
}) {
  if (lng === "ja") {
    return {
      title: `${category}の記事一覧`,
    };
  } else if (lng === "en") {
    return {
      title: `Articles of ${category}`,
    };
  }
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function CategoryPage({
  params: { category, number, lng },
}: {
  params: { category: string; number: string; lng: string };
}) {
  const { categories } = await getList();
  const pageName1 = "category";
  const currentNumber = Number(number);
  const targetCategory = categories.find((n) => n.category === category);
  const filterContents = await getList({
    offset: (currentNumber - 1) * 8,
    limit: 8,
    filters: `category[equals]${targetCategory?.id}`,
  });
  const contentsCount = filterContents.totalCount;

  function Card() {
    if (lng === "ja") {
      if (contentsCount === 0) {
        return (
          <p className="mx-auto flex py-11 text-center lg:text-lg">該当する記事がありません。</p>
        );
      } else {
        return (
          <>
            {filterContents.contents.map((post: ArticleType) => {
              return (
                <ArticleCard
                  id={post.id}
                  mainTitle={post.mainTitle}
                  category={post.category}
                  mainImage={post.mainImage.url ?? ""}
                  headingText={post.headingText}
                  publishedAt={post.publishedAt ?? ""}
                  updatedAt={post.revisedAt ?? ""}
                />
              );
            })}
          </>
        );
      }
    } else if (lng === "en") {
      if (contentsCount === 0) {
        return <p className="mx-auto flex py-11 text-center lg:text-lg">No Articles</p>;
      } else {
        return (
          <>
            {filterContents.contents_en.map((post: ArticleType_en) => {
              return (
                <ArticleCard
                  id={post.id}
                  mainTitle={post.mainTitle}
                  category={post.category}
                  mainImage={post.mainImage.url ?? ""}
                  headingText={post.headingText}
                  publishedAt={post.publishedAt ?? ""}
                  updatedAt={post.revisedAt ?? ""}
                />
              );
            })}
          </>
        );
      }
    }
  }

  return (
    <>
      {/* 記事一覧ラッパー */}
      {lng === "ja" ? (
        <h2 className="pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
          カテゴリー"{category}"の記事 ({currentNumber} / {Math.ceil(contentsCount / PER_PAGE)})
        </h2>
      ) : (
        <h2 className="pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
          Articles of "{category}" ({currentNumber} / {Math.ceil(contentsCount / PER_PAGE)})
        </h2>
      )}
      <div className="flex flex-wrap justify-center sm:justify-between">
        <Card />
      </div>
      <Pagination
        totalCount={contentsCount}
        pageName1={pageName1}
        pageName2={category}
        currentNumber={currentNumber}
      />
    </>
  );
}
