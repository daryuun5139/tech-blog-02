//記事一覧ページ（/articles/page/[id]/page.tsx）
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import { Blog } from "@/types/blog";

type paramsType = {
  number: string;
};

// generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { totalCount } = await getList();
  const PER_PAGE = 5;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((num: number) => {
    return {
      number: num.toString(),
    };
  });

  return [...paths];
}

export default async function ArticlePageId({
  params: { number },
}: {
  params: { number: string };
}) {
  const pageName1 = "articles";
  const currentNumber = Number(number);
  const filterContents = await getList({ offset: (currentNumber - 1) * 5, limit: 5 });
  const { totalCount } = await getList();
  console.log((currentNumber - 1) * 5);

  return (
    <>
      {/* 記事一覧ラッパー */}
      <h2 className="text-center text-xl font-bold">記事一覧</h2>
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
      <Pagination totalCount={totalCount} pageName1={pageName1} />
    </>
  );
}
