import Image from "next/image";
import Link from "next/link";
import CreateIcon from "@mui/icons-material/Create";
import UpdateIcon from "@mui/icons-material/Update";
import type { ArticleCardPropsType } from "@/types/blog";

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
      className="card-hover mb-8 mt-3 flex h-80 flex-row items-center justify-between rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] p-2"
    >
      {/* 画像ラッパー */}
      <div className="flex h-full w-full">
        <div className="flex items-center justify-center rounded-sm border-[1px] border-black bg-white">
          <Image
            src={mainImage}
            alt={mainTitle}
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-auto rounded-sm object-cover"
          />
        </div>
      </div>
      {/* テキストラッパー */}
      <div className="w-[65%} relative flex h-[90%] flex-col bg-[#FFFDF0] px-2">
        <h2 className="mb-2 items-start  text-lg font-bold text-black">{mainTitle}</h2>
        <div key={id}>
          <div dangerouslySetInnerHTML={{ __html: headingText.headingText }} />
        </div>
        <div className="flex">
          <p className="text-md rounded-full border-[1px] border-black  px-2 py-[0.5px] text-center text-black">
            {category.category}
          </p>
        </div>

        <div className="absolute bottom-0 flex flex-col ">
          <p className="text-md text-black ">
            <CreateIcon className="text-black" />
            {publishedAt.slice(0, 10)}
          </p>
          <p className="text-md  text-black">
            <UpdateIcon className="text-black" />
            {updatedAt.slice(0, 10)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
