//記事個別ページ（/articles/[id]/page.tsx）
import { getList, getDetail } from "@/lib/dataQuery";
import type { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { formatDate2 } from "@/lib/timeFormat";

type paramsType = {
  id: string;
};

export async function generateStaticParams(): Promise<paramsType[]> {
  const { contents } = await getList();

  const paths = contents.map((post: Blog) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({ params: { id } }: { params: { id: string } }) {
  const { categories } = await getList();
  const post: Blog = await getDetail(id);
  const body = post.content;

  return (
    <>
      <h2 className="mx-2 px-3 pt-3">
        <Link className="menu-text-hover" href="/">
          HOME
        </Link>
        <span> ▶ </span>
        <Link className="menu-text-hover" href={`/category/${post.category.category}/page/1`}>
          {post.category.category}
        </Link>
        <span> ▶ </span>
        {post.title}
      </h2>
      {/* 記事内容ラッパー */}
      <div className="relative mx-2 flex flex-col justify-center px-2">
        <div className="absolute top-3 mb-3 flex flex-col rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] p-4">
          <h1 className="py-3 text-center text-3xl font-bold">{post.title}</h1>
          <div className="flex items-center justify-between py-1">
            <Link
              href={`/category/${post.category.category}/page/1`}
              className="label-hover rounded-full border-[1px] border-gray-300 p-1 px-2 text-center text-sm font-semibold "
            >
              {post.category.category}
            </Link>
            <span className="text-right">{formatDate2(post.publishedAt)}</span>
          </div>
          <Image
            src={post.eyecatch?.url ?? ""}
            width={550}
            height={300}
            alt={post.title}
            className="w-full rounded-sm object-cover"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `${post.content}`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
