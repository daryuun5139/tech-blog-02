import { getList, getDetail } from "@/lib/dataQuery";
import type { Blog } from "@/types/blog";
import Image from "next/image";

type paramsType = {
  id: string;
};

export async function generateStaticParams(): Promise<paramsType[]> {
  const { contents, categories } = await getList();

  const paths = contents.map((post: Blog) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

// titleタグに記事のタイトルを動的に入れる
export async function generateMetadata({ params }: { params: paramsType }) {
  const pageTitle = await getDetail(params.id);

  return {
    title: pageTitle.title,
  };
}

export default async function StaticDetailPage({ params: { id } }: { params: { id: string } }) {
  const { categories } = await getList();
  const post: Blog = await getDetail(id);
  const body = post.content;

  return (
    <>
      {/* 記事内容ラッパー */}
      <div className="relative mx-2 flex flex-col justify-center p-2">
        <div className="absolute top-9 my-3 flex flex-col rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] p-4">
          <h1 className="py-3 text-center text-3xl font-bold">{post.title}</h1>
          <h3 className="py-2 text-right">{post.publishedAt}</h3>
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
