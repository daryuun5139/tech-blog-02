import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import topImage from "../../public/Season Everything With Love.svg";
import ThemeButton from "./ThemeButton";
import { categoryCount, getList, publishAtGroup } from "@/lib/dataQuery";
import { CategoryType } from "@/types/blog";

type SideBarProps = {
  categories: CategoryType[];
};

export default async function Header() {
  const { categories } = await getList();
  const category_arr = await categoryCount();
  const { archiveData } = await publishAtGroup();

  return (
    <div className="mx-auto flex w-full flex-col items-center lg:w-[90%] ">
      {/* ヒーローセクション */}
      <div className="relative flex w-[90%] flex-row items-center justify-between sm:w-full sm:justify-end md:w-[90%]">
        {/* 画面縮小時表示イメージ */}
        <Link href="/" legacyBehavior>
          <a aria-label="Home">
            <Image
              width="0"
              height="0"
              className="h-24 w-24 pl-3 pt-2 sm:hidden"
              src={topImage}
              alt="top-image-sm"
              priority={true}
            />
          </a>
        </Link>
        {/* 日本語、英語切り替え&ダークモードボタン */}
        <div className="mr-[60px] mt-2 flex items-center gap-1 sm:mr-0">
          <div className="flex flex-row gap-2 text-sm">
            <span className="menu-text-hover">日本語</span>
            <span>|</span>
            <span className="menu-text-hover">English</span>
          </div>
          <ThemeButton />
        </div>
        {/* ハンバーガーメニュー */}
        <div className="absolute left-0 top-0 flex w-full flex-col sm:hidden">
          <input id="hamburger-acd-check1" className="hamburger-acd-check" type="checkbox" />
          <label
            className="hamburger-acd-label right-[-440px] top-9 z-20 h-10 w-10 text-center text-lg font-bold text-black"
            htmlFor="hamburger-acd-check1"
          ></label>
          <ul className="hamburger-acd-content absolute left-0 top-0 z-10 flex w-full flex-col items-center justify-between gap-2 bg-[#773b01] py-2 text-xl ">
            <li>
              <Link href="/" className="text-[#FFFDF0]">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-[#FFFDF0]">
                PROFILE
              </Link>
            </li>
            <li>
              <Link href="/works" className="text-[#FFFDF0]">
                WORKS
              </Link>
            </li>
            <li>
              <Link href="/articles/page/1" className="rou text-[#FFFDF0]">
                ARTICLES
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* メイン画像 */}
      <div>
        <Link href="/" legacyBehavior>
          <a aria-label="Home">
            <Image
              className="hidden h-28 w-28 sm:block"
              width="0"
              height="0"
              src={topImage}
              alt="top-image"
              priority={true}
            />
          </a>
        </Link>
      </div>

      {/* ナビゲーションバー */}
      <div className="hidden h-12 w-full items-center justify-center sm:block md:w-[90%]">
        <ul className="flex h-12 flex-row items-center justify-between border-y-[1px] border-[#773b01] px-12">
          <li>
            <Link href="/" className="navMenu menu-text-hover">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/profile" className="navMenu menu-text-hover">
              PROFILE
            </Link>
          </li>
          <li>
            <Link href="/works" className="navMenu menu-text-hover">
              WORKS
            </Link>
          </li>
          <li>
            <Link href="/articles/page/1" className="navMenu menu-text-hover">
              ARTICLES
            </Link>
          </li>
        </ul>
      </div>
      {/* カテゴリ一覧ボックス*/}
      <div className="mt-5 flex w-[88%] flex-col items-center justify-between rounded-md border-[1px] border-[#773b01] bg-[#FFFDF0] py-3 lg:hidden">
        <input id="category-acd-check1" className="acd-check" type="checkbox" />
        <label
          className="acd-label text-center text-lg font-bold text-black"
          htmlFor="category-acd-check1"
        >
          CATEGORY
        </label>
        <div className="acd-content flex w-full flex-row flex-wrap justify-center ">
          {categories.map((item: CategoryType) => {
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
