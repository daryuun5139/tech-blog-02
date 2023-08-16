import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import topImage from "../../public/Season Everything With Love.svg";
import ThemeButton from "./ThemeButton";
import { categoryCount, getList, publishAtGroup } from "@/lib/dataQuery";
import { Category } from "@/types/blog";

type SideBarProps = {
  categories: Category[];
};

export default async function Header() {
  const { categories } = await getList();
  const category_arr = await categoryCount();
  const { archiveData } = await publishAtGroup();

  return (
    <div className="mx-auto flex w-full flex-col items-center lg:w-[90%] ">
      <div className="flex w-full flex-row items-center justify-between sm:justify-end md:w-[90%]">
        <Link href="/">
          <Image
            width="0"
            height="0"
            className="h-24 w-24 pl-3 pt-2 sm:hidden"
            src={topImage}
            alt="top-image-sm"
          />
        </Link>
        <div className="flex flex-row items-center gap-2 pr-3">
          <li className="flex flex-row gap-2 text-sm">
            <ul className="menu-text-hover">日本語</ul>
            <ul>|</ul>
            <ul className="menu-text-hover">English</ul>
          </li>
          <ThemeButton />
          <MenuIcon className="text-4xl sm:hidden" />
        </div>
      </div>
      {/* メイン画像 */}
      <div>
        <Link href="/">
          <Image
            className="hidden h-28 w-28 sm:block"
            width="0"
            height="0"
            src={topImage}
            alt="top-image"
          />
        </Link>
      </div>

      {/* ナビゲーションバー */}
      <div className="hidden h-12 w-full items-center justify-center sm:block md:w-[90%] ">
        <li className="flex h-12 flex-row items-center justify-between border-y-[1px] border-[#773b01] px-12">
          <Link href="/" className="navMenu menu-text-hover">
            HOME
          </Link>
          <Link href="/profile" className="navMenu menu-text-hover">
            PROFILE
          </Link>
          <Link href="/works" className="navMenu menu-text-hover">
            WORKS
          </Link>
          <Link href="/articles/page/1" className="navMenu menu-text-hover">
            ARTICLES
          </Link>
        </li>
      </div>
      {/* カテゴリ一覧ボックス*/}
      <div className="mt-5 flex w-[88%] flex-col items-center justify-between rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] py-3 lg:hidden">
        <input id="category-acd-check1" className="acd-check" type="checkbox" />
        <label
          className="acd-label text-center text-lg font-bold text-black"
          htmlFor="category-acd-check1"
        >
          {" "}
          CATEGORY
        </label>
        <div className="acd-content flex w-full flex-row flex-wrap justify-center ">
          {categories.map((item: Category) => {
            return (
              <>
                <Link
                  href={`/category/${item.category}/page/1`}
                  className="label-hover mx-2 my-2 flex w-[42%] rounded-xl border-[1px] border-gray-300 p-2 pl-1 text-center text-sm "
                >
                  <Image
                    className="mr-1"
                    width={20}
                    height={20}
                    src={item.iconimage.url}
                    alt={item.category}
                  />
                  <span>{item.category}</span>
                  <span>({category_arr[item.category]})</span>
                </Link>
              </>
            );
          })}
        </div>
      </div>

      {/* 月別アーカイブボックス */}
      <div className="mt-5 flex w-[88%] flex-col items-center justify-between rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] py-3 lg:hidden">
        <input id="archive-acd-check1" className="acd-check" type="checkbox" />
        <label
          className="acd-label text-center text-lg font-bold text-black"
          htmlFor="archive-acd-check1"
        >
          ARCHIVE
        </label>
        <div className="acd-content flex flex-wrap justify-evenly">
          {Object.keys(archiveData).map((item) => (
            <Link
              href={`/archive/${item}/page/1`}
              className="label-hover m-2 flex h-10 rounded-xl border-[1px] border-gray-300 p-2 text-center text-sm "
            >
              {item.slice(0, 4) + "年" + item.slice(4) + "月"}
              <span> </span>({archiveData[item]})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
