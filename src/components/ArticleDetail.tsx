import { formatDate2 } from "@/lib/timeFormat";
import { ArticleDetailPropsType } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import HighlightCode from "@/lib/highlightcode";
import ShortenText from "@/lib/shortenText";
import parse from "html-react-parser";

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
    <div>
      <h2 className="pt-3 text-black">
        <Link className="menu-text-hover" href="/">
          HOME
        </Link>
        <span className="text-black"> ▶ </span>
        <Link className="menu-text-hover" href={`/category/${category.category}/page/1`}>
          {category.category}
        </Link>
        <span className="text-black"> ▶ </span>
        {mainTitle}
      </h2>
      {/* 記事内容ラッパー */}
      <div className="flex flex-col justify-center">
        <div className="mb-3 flex flex-col rounded-sm border-[#773b01] p-4 lg:pl-0">
          {/* メインタイトル */}
          <h3 className="text-center text-3xl font-medium text-black">{mainTitle}</h3>
          {/* カテゴリ＆作成日 */}
          <div className="flex items-center justify-between py-1">
            <Link
              href={`/category/${category.category}/page/1`}
              className="label-hover w-[90px] rounded-full border-[1px] border-gray-300 p-1 px-2 text-center text-sm font-semibold text-black"
            >
              {category.category}
            </Link>
            <span className="text-right text-black">{formatDate2(publishedAt)}</span>
          </div>
          {/* メインイメージ */}
          <Image
            src={mainImage}
            priority={true}
            alt={mainTitle}
            className="w-auto rounded-sm object-cover"
            width="0"
            height="450"
            sizes="100vw"
          />
          {/* 冒頭文 */}
          <div className="my-5 text-lg leading-10 text-black">{parse(headingText.headingText)}</div>
          {/* 本文 */}
          <div>
            {mainText.map((chapter, id) => {
              return (
                <div key={id}>
                  <h4 className="my-5 w-fit border-b-[3px] border-black pr-10 text-[28px] tracking-wide text-black">
                    {chapter.fieldId}
                  </h4>
                  {chapter.content.map((item, id) => {
                    // リッチエディタの場合
                    return item.fieldId === "richEditor" ? (
                      <div key={id} className="my-5 w-full">
                        {HighlightCode(item.richEditor)}
                      </div>
                    ) : // マークダウンの場合
                    item.fieldId === "markdown" ? (
                      <div key={id} className="my-5 text-lg leading-10 text-black">
                        {item.markdown}
                      </div>
                    ) : // リッチリンクの場合
                    item.fieldId === "richlink" ? (
                      <div
                        key={id}
                        className="my-5 rounded-sm border-[1px] border-gray-500 p-2 text-black"
                      >
                        {item.richlink}
                      </div>
                    ) : // サブタイトルの場合
                    item.fieldId === "subTitle" ? (
                      <div
                        key={id}
                        className="my-5 w-fit rounded-sm border-l-4 border-gray-500 bg-gray-100 p-2 pr-3 text-xl  text-black"
                      >
                        {item.subTitle}
                      </div>
                    ) : // 画像の場合
                    item.fieldId === "image" ? (
                      <Image
                        src={item.image.url}
                        alt={id.toString()}
                        className="my-5 rounded-sm object-cover"
                        width="450"
                        height="300"
                      />
                    ) : null;
                  })}
                </div>
              );
            })}
          </div>
          {/* 締め文 */}
          <div>
            <h4 className="my-5 w-fit border-b-[3px] border-black pr-10 text-[28px] tracking-wide text-black">
              {footerText.title}
            </h4>
            <p className="my-5 text-lg leading-10 text-black">{parse(footerText.footerText)}</p>
          </div>
          <h2 className="pt-3 text-black">
            <Link className="menu-text-hover" href="/">
              HOME
            </Link>
            <span className="text-black"> ▶ </span>
            <Link className="menu-text-hover" href={`/category/${category.category}/page/1`}>
              {category.category}
            </Link>
            <span className="text-black"> ▶ </span>
            {mainTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;