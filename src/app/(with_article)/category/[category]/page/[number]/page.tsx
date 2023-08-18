//カテゴリ別記事一覧ページ（/category/[category]/page/[number]/page.tsx）
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import { Blog, Category } from "@/types/blog";

type paramsType = {
  category: string;
  number: string;
};

const PER_PAGE = 5;

//generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { categories, totalCount } = await getList();
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = categories.flatMap((category: Category) =>
    range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => ({
      category: category.category,
      number: number.toString(),
    }))
  );
  return [...paths];
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function CategoryPage({
  params: { category, number },
}: {
  params: { category: string; number: string };
}) {
  const { categories } = await getList();
  const pageName1 = "category";
  const currentNumber = Number(number);
  const targetCategory = categories.find((n) => n.category === category);
  const filterContents = await getList({
    offset: (currentNumber - 1) * 5,
    limit: 5,
    filters: `category[equals]${targetCategory?.id}`,
  });
  const contentsCount = filterContents.totalCount;

  return (
    <>
      {/* 記事一覧ラッパー */}
      <h2 className="text-center text-xl font-bold">
        カテゴリー"{category}"の記事 ({currentNumber} / {Math.ceil(contentsCount / PER_PAGE)})
      </h2>
      <div className="flex flex-col justify-center p-2">
        <ul>
          {filterContents.contents.map((post: Blog) => {
            return (
              <li key={post.id}>
                <ArticleCard
                  id={post.id}
                  content={post.content}
                  title={post.title}
                  category={post.category}
                  imagePath={post.eyecatch?.url ?? ""}
                  date={post.publishedAt ?? ""}
                  upDate={post.revisedAt ?? ""}
                />
              </li>
            );
          })}
        </ul>
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
