"use client";

import Image from "next/image";
import Link from "next/link";

import type { ArticleCardPropsType } from "@/types/blog";
import { ShortenText } from "@/lib/shortenText";
import { useParams } from "next/navigation";
import { formatDate2 } from "@/lib/timeFormat";

const ArticleCard = ({
  id,
  mainTitle,
  category,
  mainImage,
  headingText,
  publishedAt,
  updatedAt,
}: ArticleCardPropsType) => {
  const { lng } = useParams();
  console.log(headingText);

  return (
    <Link
      href={`/${lng}/articles/${id}`}
      className="card-hover mb-10 flex h-[360px] w-[90%] flex-col rounded-sm sm:w-[49%]"
    >
      {/* 画像ラッパー */}
      <div className="flex w-full">
        <Image
          src={mainImage}
          alt={mainTitle}
          width="0"
          height="0"
          sizes="100vw"
          className="h-[200px] w-full rounded-sm object-cover"
        />
      </div>
      {/* テキストラッパー */}
      <div className="relative mt-2 flex h-full flex-col border-l-[1px] border-[#a6a7aa] p-2 pt-1 dark:border-[#773B01]">
        <div className="mb-2 w-[90px] rounded-full border-[1px] border-black px-2 py-[0.5px]  text-center text-sm text-black dark:border-[#773B01] dark:text-[#773B01]">
          {category.category}
        </div>
        <h2 className="mb-2 flex truncate pl-1 text-black dark:text-[#773B01]">{mainTitle}</h2>
        <div className="mb-1 flex h-[50px] flex-col overflow-hidden pl-1 text-sm dark:text-[#773B01]">
          {ShortenText(headingText.headingText)}
        </div>
        <div className="absolute bottom-0 right-3 flex flex-col">
          <p className="text-sm text-black dark:text-[#773B01]">{formatDate2(publishedAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
