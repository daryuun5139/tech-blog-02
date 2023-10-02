// ドラフト用個別ページ
import { getDraft, getDraft_en } from "@/lib/dataQuery";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ArticleDetail from "@/components/ArticleDetail";

type Props = {
  params: { id: string; lng: string };
  searchParams: { draftKey: string | string[] };
};

export default async function ArticlePage({
  params: { id, lng },
  searchParams: { draftKey },
}: Props) {
  // 変更せずにプレビューすると空になる
  if (typeof draftKey !== "string" || draftKey === "") {
    redirect(`/${lng}/articles/${id}`);
  }

  // ここではキャッシュが無視される
  if (lng === "ja") {
    const post = await getDraft(id, { draftKey });
    if (!post) {
      notFound();
    } else {
      return (
        <>
          <div className="mx-3 cursor-pointer items-center rounded-full border-[1px] border-[#773b01] py-2 text-center font-bold">
            {" "}
            {draftKey && <Link href={`/${lng}/articles/${id}`}>プレビューを終了</Link>}
          </div>
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
  } else if (lng === "en") {
    const post = await getDraft_en(id, { draftKey });
    if (!post) {
      notFound();
    } else {
      return (
        <>
          <div className="mx-3 cursor-pointer items-center rounded-full border-[1px] border-[#773b01] py-2 text-center font-bold">
            {" "}
            {draftKey && <Link href={`/${lng}/articles/${id}`}>Exit preview</Link>}
          </div>
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
}
