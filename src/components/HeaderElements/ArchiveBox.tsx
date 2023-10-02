"use client";
import "src/styles/components.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PublishGroup } from "@/types/blog";

type Props = {
  list: PublishGroup;
};

const ArchiveBox = ({ list }: Props) => {
  const { lng } = useParams();

  return (
    <div className="mt-5 flex w-[88%] flex-col items-center justify-between rounded-md border-[1px] border-[#773b01] py-3 lg:hidden">
      <input id="archive-acd-check1" className="acd-check" type="checkbox" />
      <label
        className="acd-label text-center text-lg font-medium text-black"
        htmlFor="archive-acd-check1"
      >
        ARCHIVE
      </label>
      <div className="acd-content flex flex-wrap justify-evenly">
        {Object.keys(list).map((item) => (
          <div key={item}>
            <Link
              href={`/${lng}/archive/${item}/page/1`}
              className="label-hover m-2 flex h-10 rounded-xl border-[1px] border-gray-300 p-2 text-center text-sm "
            >
              {item.slice(0, 4) + "年" + item.slice(4) + "月"}
              <span> </span>({list[item]})
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveBox;
