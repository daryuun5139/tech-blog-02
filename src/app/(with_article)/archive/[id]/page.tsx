import ArticleCard from "@/components/ArticleCard";
import { getList, publishAtGroup } from "@/lib/dataQuery";
import { Blog } from "@/types/blog";

type paramsType = {
  id: string;
};

// generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { archiveData } = await publishAtGroup();
  const paths = Object.keys(archiveData).map((item) => {
    return {
      id: item,
    };
  });
  return [...paths];
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function ArchivePage({ params: { id } }: { params: { id: string } }) {
  const { contents, categories } = await getList();
  const { archiveData } = await publishAtGroup();
  const targetArchive = Object.keys(archiveData).find((n) => n === id);
  const filterContents = contents.filter(
    (content) => content.publishedAt.slice(0, 8).split("-").join("") === targetArchive
  );

  return (
    <>
      {/* 新着記事一覧ラッパー */}
      <h2 className="text-center text-xl font-bold">記事一覧</h2>
      <div className="flex flex-col justify-center p-2">
        <ul>
          {filterContents.map((post: Blog) => {
            return (
              <li key={post.id}>
                <ArticleCard
                  id={post.id}
                  content={post.content}
                  title={post.title}
                  imagePath={post.eyecatch?.url ?? ""}
                  date={post.publishedAt ?? ""}
                  upDate={post.revisedAt ?? ""}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
