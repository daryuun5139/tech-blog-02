import ArticleCard from "@/components/ArticleCard";
import { getList } from "@/lib/dataQuery";
import { Blog, Category } from "@/types/blog";

type paramsType = {
  id: string;
};

//generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { categories } = await getList();

  const paths = categories.map((category: Category) => {
    return {
      id: category.category,
    };
  });
  return [...paths];
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function CategoryPage({ params: { id } }: { params: { id: string } }) {
  const { contents, categories } = await getList();
  const targetCategory = categories.find((n) => n.category === id);
  const filterContents = contents.filter(
    (content) => content.category?.category === targetCategory?.category
  );

  return (
    <>
      {/* 記事一覧ラッパー */}
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
