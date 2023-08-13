import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@/components/Paginaiton";
import { getList } from "@/lib/dataQuery";
import type { Blog } from "@/types/blog";

export default async function Articles() {
  const { contents, totalCount } = await getList();

  return (
    <>
      {/* 記事一覧ラッパー */}
      <h2 className="text-center text-xl font-bold">記事一覧</h2>
      <div className="flex flex-col justify-center p-2">
        <ul>
          {contents.slice(0, 5).map((post: Blog) => {
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
      <Pagination totalCount={totalCount} />
    </>
  );
}
