import { CategoryType } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { categoryCount, getList, publishAtGroup } from "@/lib/dataQuery";
import aboutImage from "../../public/animal_seal.svg";

type SideBarProps = {
  categories: CategoryType[];
};

const SideBar = async () => {
  const { archiveData } = await publishAtGroup();
  const { categories } = await getList();
  const category_arr = await categoryCount();

  return (
    <div className="relative hidden w-[295px] lg:block">
      <div className="absolute top-14 my-3 ml-4 flex-col items-start">
        {/* 当ブロクについて */}
        <div className="mb-6 flex flex-col items-center justify-between rounded-sm border-[1px] border-[#773b01] p-3 ">
          <h2 className="p-2 text-lg font-bold text-black">ABOUT</h2>
          <Image
            src={aboutImage}
            width="0"
            height="0"
            alt="aboutImage"
            className="h-auto w-full rounded-md"
            loading="eager"
          />
          <div className="flex w-full flex-row flex-wrap justify-start p-4 text-black">
            <p className="mb-2 text-black">ものを作ることが好きなフロントエンジニアです。</p>
            <p className="mb-2 text-black">
              DIY、裁縫を趣味にしています。
              <br />
              海外で働くことを目指して勉強中です。
            </p>
            <p className="mb-2 text-black">
              Javascript、TypeScript、React、Next.js、Tailwindを使ってWebサイトを作成しています。
            </p>
          </div>
        </div>

        {/* カテゴリ一覧ボックス */}
        <div className="mb-6 flex flex-col items-center justify-between rounded-sm border-[1px] border-[#773b01] pb-5">
          <h2 className="p-2 text-lg font-bold text-black">CATEGORY</h2>
          <div className="flex w-full flex-col items-center justify-center ">
            {categories.map((item: CategoryType) => {
              return (
                <>
                  <Link
                    href={`/category/${item.category}/page/1`}
                    className="label-hover mx-1 my-2 flex w-fit rounded-full border-[1px] border-gray-300 p-2 pl-1 text-center text-sm "
                  >
                    <Image
                      className="mr-1"
                      width={20}
                      height={20}
                      src={item.iconimage.url}
                      alt={item.category}
                    />
                    <span className="text-black">{item.category}</span>
                    <span className="text-black">（{category_arr[item.category]}）</span>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        {/* 月別アーカイブボックス */}
        <div className="mb-6 flex flex-col items-center justify-between rounded-sm border-[1px] border-[#773b01] p-1 pb-5">
          <h2 className="p-2 text-lg font-bold text-black">ARCHIVE</h2>
          <div className="flex flex-wrap justify-evenly p-2">
            {Object.keys(archiveData).map((item) => (
              <Link
                href={`/archive/${item}/page/1`}
                className="label-hover m-2 flex rounded-full border-[1px] border-gray-300 p-2 text-center text-sm text-black"
              >
                {item.slice(0, 4) + "年" + item.slice(4) + "月"}
                <span></span>（{archiveData[item]}）
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
