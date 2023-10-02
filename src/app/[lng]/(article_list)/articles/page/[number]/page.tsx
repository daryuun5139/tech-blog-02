//記事一覧ページ（/articles/page/[id]/page.tsx）
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import { ArticleType, ArticleType_en } from "@/types/blog";

//generateMetadata : Metadataのtitleタグに月別のタイトルを動的に入れる
export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
  if (lng === "ja") {
    return {
      title: "記事一覧",
    };
  } else if (lng === "en") {
    return {
      title: "Articles",
    };
  }
}

type paramsType = {
  number: string;
};

const PER_PAGE = 8;

// generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { totalCount } = await getList();
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((num: number) => {
    return {
      number: num.toString(),
    };
  });

  return [...paths];
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function ArticlePageId({
  params: { number, lng },
}: {
  params: { number: string; lng: string };
}) {
  const pageName1 = "articles";
  const currentNumber = Number(number);
  const filterContents = await getList({ offset: (currentNumber - 1) * 8, limit: 8 });
  const { totalCount } = await getList();

  function Card() {
    if (lng === "ja") {
      if (!filterContents.contents || filterContents.contents.length === 0) {
        return <p className="mx-auto flex py-11 text-center lg:text-lg">記事がありません。</p>;
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
      if (!filterContents.contents_en || filterContents.contents_en.length === 0) {
        return <p className="mx-auto flex py-11 text-center lg:text-lg">No Article</p>;
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
          記事一覧 ({currentNumber} / {Math.ceil(totalCount / PER_PAGE)})
        </h2>
      ) : (
        <h2 className="pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
          Articles ({currentNumber} / {Math.ceil(totalCount / PER_PAGE)})
        </h2>
      )}
      <div className="flex flex-wrap justify-center sm:justify-between">
        <Card />
      </div>
      <Pagination totalCount={totalCount} pageName1={pageName1} currentNumber={currentNumber} />
    </>
  );
}
