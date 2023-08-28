// 記事一覧ページ
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import type { ArticleType } from "@/types/blog";

export default async function Home() {
  const { contents, totalCount } = await getList();
  const pageName1 = "articles";

  return (
    <>
      {/* 新着記事一覧ラッパー */}
      <h2 className="title-deco-line text-center text-xl font-bold">新着記事一覧</h2>
      <div className="flex flex-col justify-center p-2">
        <ul>
          {contents.slice(0, 5).map((post: ArticleType) => {
            return (
              <li key={post.id}>
                <ArticleCard
                  id={post.id}
                  mainTitle={post.mainTitle}
                  category={post.category}
                  mainImage={post.mainImage.url ?? ""}
                  headingText={post.headingText}
                  publishedAt={post.publishedAt ?? ""}
                  updatedAt={post.revisedAt ?? ""}
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
