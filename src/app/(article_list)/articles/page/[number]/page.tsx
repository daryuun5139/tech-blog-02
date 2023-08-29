//記事一覧ページ（/articles/page/[id]/page.tsx）
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import { ArticleType } from "@/types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事一覧",
};

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
  params: { number },
}: {
  params: { number: string };
}) {
  const pageName1 = "articles";
  const currentNumber = Number(number);
  const filterContents = await getList({ offset: (currentNumber - 1) * 8, limit: 8 });
  const { totalCount } = await getList();

  return (
    <>
      {/* 記事一覧ラッパー */}
      <h2 className="pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
        記事一覧 ({currentNumber} / {Math.ceil(totalCount / PER_PAGE)})
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-between">
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
      </div>
      <Pagination totalCount={totalCount} pageName1={pageName1} currentNumber={currentNumber} />
    </>
  );
}
