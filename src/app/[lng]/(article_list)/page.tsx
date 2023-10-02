// 記事一覧ページ
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import type { ArticleType, ArticleType_en } from "@/types/blog";

type ParamType = {
  params: { lng: string };
};

export default async function Home({ params: { lng } }: ParamType) {
  const { contents, contents_en, totalCount } = await getList();
  const pageName1 = "articles";

  function Card() {
    if (lng === "ja") {
      if (!contents || contents.length === 0) {
        return <p className="mx-auto flex py-11 text-center lg:text-lg">記事がありません。</p>;
      } else {
        return (
          <>
            {contents.slice(0, 8).map((post: ArticleType) => {
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
      if (!contents_en || contents_en.length === 0) {
        return <p className="mx-auto flex py-11 text-center lg:text-lg">No Article</p>;
      } else {
        return (
          <>
            {contents_en.slice(0, 8).map((post: ArticleType_en) => {
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
      {/* 新着記事一覧ラッパー */}
      <h2 className="title-deco-line pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
        LATEST ARTICLES
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-between">
        <Card />
      </div>
      <Pagination totalCount={totalCount} pageName1={pageName1} />
    </>
  );
}
