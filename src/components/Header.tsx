import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import topImage from "../../public/Season Everything With Love.svg";

export default function Header() {
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
            <ul className="cursor-pointer hover:underline">日本語</ul>
            <ul>|</ul>
            <ul className="cursor-pointer hover:underline">English</ul>
          </li>
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
          <Link href="/" className="navMenu">
            HOME
          </Link>
          <Link href="/profile" className="navMenu">
            PROFILE
          </Link>
          <Link href="/works" className="navMenu">
            WORKS
          </Link>
          <Link href="/articles" className="navMenu">
            ARTICLES
          </Link>
        </li>
      </div>
    </div>
  );
}
