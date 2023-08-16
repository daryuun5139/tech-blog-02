import Image from "next/image";
import Link from "next/link";
import CreateIcon from "@mui/icons-material/Create";
import UpdateIcon from "@mui/icons-material/Update";
import type { ArticleCardProps } from "@/types/blog";

const ArticleCard = ({
  id,
  content,
  category,
  title,
  imagePath,
  date,
  upDate,
}: ArticleCardProps) => {
  return (
    <Link
      href={`/articles/${id}`}
      className="card-hover mb-8 mt-3 flex h-80 flex-row items-center justify-between rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] p-2"
    >
      {/* 画像ラッパー */}
      <div className="flex h-full w-full">
        <div className="flex items-center justify-center rounded-sm border-[1px] border-black bg-white">
          <Image
            src={imagePath}
            width="240"
            height="240"
            alt={title}
            className="rounded-sm object-cover"
          />
        </div>
      </div>
      {/* テキストラッパー */}
      <div className="w-[65%} relative flex h-[90%] flex-col bg-[#FFFDF0] px-2">
        <h2 className="mb-2 items-start  text-lg font-bold text-black">{title}</h2>
        <div
          className="text-md pb-2 text-black"
          dangerouslySetInnerHTML={{
            __html: `${content}`,
          }}
        ></div>
        <div className="flex ">
          <p className="text-md rounded-full border-[1px] border-black  px-2 py-[0.5px] text-center text-black">
            {category?.category}
          </p>
        </div>

        <div className="absolute bottom-0 flex flex-col ">
          <p className="text-md text-black ">
            <CreateIcon className="text-black" />
            {date.slice(0, 10)}
          </p>
          <p className="text-md  text-black">
            <UpdateIcon className="text-black" />
            {upDate.slice(0, 10)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
