//記事個別ページ（/articles/[id]/page.tsx）
import { getList, getDetail } from "@/lib/dataQuery";
import type { ArticleType } from "@/types/blog";
import ArticleDetail from "@/components/ArticleDetail";

type paramsType = {
  id: string;
};

//generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { contents } = await getList();
  const paths = contents.map((post: ArticleType) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

//generateMetadata : Metadataのtitleタグにカテゴリのタイトルを動的に入れる
export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
  const post: ArticleType = await getDetail(id);
  return {
    title: post.title,
  };
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function StaticDetailPage({ params: { id } }: { params: { id: string } }) {
  const { categories } = await getList();
  const post: ArticleType = await getDetail(id);

  return (
    <>
      <ArticleDetail
        id={post.id}
        content={post.mainText}
        category={post.category}
        title={post.title}
        imagePath={post.mainImage.url ?? ""}
        publishedAt={post.publishedAt}
      />
    </>
  );
}
