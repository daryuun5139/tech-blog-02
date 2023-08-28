import { getDraft } from "@/lib/dataQuery";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ArticleDetail from "@/components/ArticleDetail";

type Props = {
  params: { id: string };
  searchParams: { draftKey: string | string[] };
};

export default async function ArticlePage({ params: { id }, searchParams: { draftKey } }: Props) {
  // 変更せずにプレビューすると空になる
  if (typeof draftKey !== "string" || draftKey === "") {
    redirect(`/articles/${id}`);
  }

  // ここではキャッシュが無視される
  const post = await getDraft(id, { draftKey });
  if (!post) {
    notFound();
  }
  return (
    <>
      <div className="mx-3 cursor-pointer items-center rounded-full border-[1px] border-[#773b01] bg-[#FFFDF0] py-2 text-center font-bold">
        {" "}
        {draftKey && <Link href={`/articles/${id}`}>プレビューを終了</Link>}
      </div>

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
