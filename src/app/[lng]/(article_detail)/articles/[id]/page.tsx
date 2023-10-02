//記事個別ページ（/articles/[id]/page.tsx）
import { getList, getDetail, getDetail_en } from "@/lib/dataQuery";
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
export async function generateMetadata({
  params: { id, lng },
}: {
  params: { id: string; lng: string };
}) {
  if (lng === "ja") {
    const post = await getDetail(id);
    return {
      title: post.mainTitle,
    };
  } else if (lng === "en") {
    const post = await getDetail_en(id);
    return {
      title: post.mainTitle,
    };
  }
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function StaticDetailPage({
  params: { id, lng },
}: {
  params: { id: string; lng: string };
}) {
  const { categories } = await getList();

  if (lng === "ja") {
    const post = await getDetail(id);
    return (
      <>
        <ArticleDetail
          id={post.id}
          publishedAt={post.publishedAt}
          mainTitle={post.mainTitle}
          mainImage={post.mainImage.url ?? ""}
          category={post.category}
          headingText={post.headingText}
          mainText={post.mainText}
          footerText={post.footerText}
        />
      </>
    );
  } else if (lng === "en") {
    const post = await getDetail_en(id);
    return (
      <>
        <ArticleDetail
          id={post.id}
          publishedAt={post.publishedAt}
          mainTitle={post.mainTitle}
          mainImage={post.mainImage.url ?? ""}
          category={post.category}
          headingText={post.headingText}
          mainText={post.mainText}
          footerText={post.footerText}
        />
      </>
    );
  }
}
