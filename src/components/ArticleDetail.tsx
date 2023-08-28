import { formatDate2 } from "@/lib/timeFormat";
import { ArticleDetailPropsType } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import HighlightCode from "@/lib/highlightcode";

const ArticleDetail = ({
  id,
  content,
  category,
  title,
  imagePath,
  publishedAt,
}: ArticleDetailPropsType) => {
  return (
    <>
      <h2 className="mx-2 px-3 pt-3">
        <Link className="menu-text-hover" href="/">
          HOME
        </Link>
        <span> ▶ </span>
        <Link className="menu-text-hover" href={`/category/${category.category}/page/1`}>
          {category.category}
        </Link>
        <span> ▶ </span>
        {title}
      </h2>
      {/* 記事内容ラッパー */}
      <div className="relative mx-2 flex flex-col justify-center px-2">
        <div className="absolute top-3 mb-3 flex flex-col rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] p-4">
          <h1 className="py-3 text-center text-3xl font-bold">{title}</h1>
          <div className="flex items-center justify-between py-1">
            <Link
              href={`/category/${category.category}/page/1`}
              className="label-hover rounded-full border-[1px] border-gray-300 p-1 px-2 text-center text-sm font-semibold "
            >
              {category.category}
            </Link>
            <span className="text-right">{formatDate2(publishedAt)}</span>
          </div>
          <Image
            src={imagePath}
            priority={true}
            alt={title}
            className="w-full rounded-sm object-cover"
            width="0"
            height="0"
            sizes="100vw"
          />
          {content.map((item, id) => {
            return item.fieldId === "markdown" ? (
              <div
                key={id}
                dangerouslySetInnerHTML={{
                  __html: `${item.markdown}`,
                }}
              ></div>
            ) : item.fieldId === "richEditor" ? (
              HighlightCode(item.richEditor)
            ) : item.fieldId === "richlink" ? (
              <div
                key={id}
                dangerouslySetInnerHTML={{
                  __html: `${item.richlink}`,
                }}
              ></div>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
