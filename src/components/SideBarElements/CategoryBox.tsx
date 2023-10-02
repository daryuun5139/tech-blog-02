"use client";

import { CategoryType, categoryArray } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
  list: CategoryType[];
  count: categoryArray;
};

const CategoryBox = ({ list, count }: Props) => {
  const { lng } = useParams();

  return (
    <div className="mb-6 flex flex-col items-center justify-between rounded-sm border-[1px] border-[#773b01] pb-5">
      <h2 className="p-2 text-lg font-bold text-black dark:text-[#773B01]">CATEGORY</h2>
      <div className="flex w-full flex-col items-center justify-center ">
        {list.map((item: CategoryType) => {
          return (
            <div key={item.id}>
              <Link
                href={`/${lng}/category/${item.category}/page/1`}
                className="label-hover mx-1 my-2 flex w-fit rounded-full border-[1px] border-gray-300 p-2 pl-1 text-center text-sm dark:border-[#773B01]"
              >
                <Image
                  className="mr-1"
                  width={20}
                  height={20}
                  src={item.iconimage.url}
                  alt={item.category}
                />
                <span className="text-black dark:text-[#773B01]">{item.category}</span>
                <span className="text-black dark:text-[#773B01]">（{count[item.category]}）</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBox;
