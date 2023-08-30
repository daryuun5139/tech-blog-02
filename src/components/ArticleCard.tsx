import Image from "next/image";
import Link from "next/link";
import CreateIcon from "@mui/icons-material/Create";
import UpdateIcon from "@mui/icons-material/Update";
import type { ArticleCardPropsType } from "@/types/blog";
import parse from "html-react-parser";
import { ShortenText } from "@/lib/shortenText";

const ArticleCard = ({
  id,
  mainTitle,
  category,
  mainImage,
  headingText,
  publishedAt,
  updatedAt,
}: ArticleCardPropsType) => {
  return (
    <Link
      href={`/articles/${id}`}
      className="card-hover mb-10 flex h-[370px] w-[90%] flex-col rounded-sm sm:w-[49%]"
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
      <div className="relative mt-2 flex h-full flex-col border-l-[1px] border-[#a6a7aa] p-2 pt-1">
        <div className="mb-2 w-[90px] rounded-full border-[1px] border-black px-2  py-[0.5px] text-center text-sm text-black">
          {category.category}
        </div>
        <h2 className="mb-1 flex pl-1 text-black">{mainTitle}</h2>
        <div className="mb-1 flex pl-1">{ShortenText(headingText.headingText)}</div>
        <div className="absolute bottom-0 right-3 flex flex-col">
          <p className="text-sm text-black ">
            <CreateIcon className="text-black" />
            {publishedAt.slice(0, 10)}
          </p>
          <p className="text-sm text-black">
            <UpdateIcon className="text-black" />
            {updatedAt.slice(0, 10)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
