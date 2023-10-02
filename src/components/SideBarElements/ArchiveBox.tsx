"use client";
import { PublishGroup } from "@/types/blog";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
  list: PublishGroup;
};

const ArchiveBox = ({ list }: Props) => {
  const { lng } = useParams();

  return (
    <div className="mb-6 flex flex-col items-center justify-between rounded-sm border-[1px] border-[#773b01] p-1 pb-5">
      <h2 className="p-2 text-lg font-bold text-black dark:text-[#773B01]">ARCHIVE</h2>
      {lng === "ja" ? (
        <div className="flex flex-wrap justify-evenly p-2">
          {Object.keys(list).map((item) => (
            <div key={item}>
              <Link
                href={`/${lng}/archive/${item}/page/1`}
                className="label-hover m-2 flex rounded-full border-[1px] border-gray-300 p-2 text-center text-sm text-black dark:border-[#773B01] dark:text-[#773B01]"
              >
                {item.slice(0, 4) + "年" + item.slice(4) + "月"}
                <span></span>（{list[item]}）
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-evenly p-2">
          {Object.keys(list).map((item) => (
            <div key={item}>
              <Link
                href={`/${lng}/archive/${item}/page/1`}
                className="label-hover m-2 flex rounded-full border-[1px] border-gray-300 p-2 text-center text-sm text-black dark:border-[#773B01] dark:text-[#773B01]"
              >
                {item.slice(0, 4) + " / " + item.slice(4)}
                <span></span>（{list[item]}）
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchiveBox;
