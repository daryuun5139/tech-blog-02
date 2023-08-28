import { formatDate2 } from "@/lib/timeFormat";
import { ArticleDetailPropsType } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import HighlightCode from "@/lib/highlightcode";

const ArticleDetail = ({
  id,
  publishedAt,
  mainTitle,
  mainImage,
  category,
  headingText,
  mainText,
  footerText,
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
        {mainTitle}
      </h2>
      {/* 記事内容ラッパー */}
      <div className="relative mx-2 flex flex-col justify-center px-2">
        <div className="absolute top-3 mb-3 flex flex-col rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] p-4">
          {/* メインタイトル */}
          <h3 className="py-3 text-center text-3xl font-bold">{mainTitle}</h3>
          {/* カテゴリ＆作成日 */}
          <div className="flex items-center justify-between py-1">
            <Link
              href={`/category/${category.category}/page/1`}
              className="label-hover rounded-full border-[1px] border-gray-300 p-1 px-2 text-center text-sm font-semibold "
            >
              {category.category}
            </Link>
            <span className="text-right">{formatDate2(publishedAt)}</span>
          </div>
          {/* メインイメージ */}
          <Image
            src={mainImage}
            priority={true}
            alt={mainTitle}
            className="w-full rounded-sm object-cover"
            width="0"
            height="0"
            sizes="100vw"
          />
          {/* 冒頭文 */}
          <div>{headingText.headingText}</div>
          {/* 本文 */}
          <div>
            {mainText.map((chapter, id) => {
              return (
                <div key={id}>
                  <h4>{chapter.fieldId}</h4>
                  {chapter.content.map((item, id) => {
                    // リッチエディタの場合
                    return item.fieldId === "richEditor" ? (
                      <div key={id}>{HighlightCode(item.richEditor)}</div>
                    ) : // マークダウンの場合
                    item.fieldId === "markdown" ? (
                      <div
                        key={id}
                        dangerouslySetInnerHTML={{
                          __html: `${item.markdown}`,
                        }}
                      ></div>
                    ) : // リッチリンクの場合
                    item.fieldId === "richlink" ? (
                      <div
                        key={id}
                        dangerouslySetInnerHTML={{
                          __html: `${item.richlink}`,
                        }}
                      ></div>
                    ) : // サブタイトルの場合
                    item.fieldId === "subTitle" ? (
                      <div
                        key={id}
                        dangerouslySetInnerHTML={{
                          __html: `${item.subTitle}`,
                        }}
                      ></div>
                    ) : // 画像の場合
                    item.fieldId === "image" ? (
                      <Image
                        src={item.image.url}
                        alt={id.toString()}
                        className="w-full rounded-sm object-cover"
                        width="0"
                        height="0"
                      />
                    ) : null;
                  })}
                </div>
              );
            })}
          </div>
          {/* 締め文 */}
          <div>{footerText.footerText}</div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
