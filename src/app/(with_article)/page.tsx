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
      <h2 className="title-deco-line pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
        LATEST ARTICLES
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-between">
        {contents.slice(0, 8).map((post: ArticleType) => {
          return (
            <>
              <ArticleCard
                id={post.id}
                mainTitle={post.mainTitle}
                category={post.category}
                mainImage={post.mainImage.url ?? ""}
                headingText={post.headingText}
                publishedAt={post.publishedAt ?? ""}
                updatedAt={post.revisedAt ?? ""}
              />
            </>
          );
        })}
      </div>
      <Pagination totalCount={totalCount} pageName1={pageName1} />
    </>
  );
}
