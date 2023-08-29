import Link from "next/link";
import Image from "next/image";
import topImage from "../../public/Season Everything With Love.svg";
import ThemeButton from "./HeaderElements/ThemeButton";
import { CategoryType } from "@/types/blog";
import HamburgerMenu from "./HeaderElements/HamburgerMenu";
import NavBar from "./HeaderElements/NavBar";
import CategoryBox from "./HeaderElements/CategoryBox";
import ArchiveBox from "./HeaderElements/ArchiveBox";
import Ja_EnButton from "./HeaderElements/Ja_EnButton";

type SideBarProps = {
  categories: CategoryType[];
};

export default function Header() {
  return (
    <div className="mx-auto flex w-full flex-col items-center">
      {/* ヒーローセクション */}
      <div className="relative flex w-full flex-row items-center justify-between sm:justify-end">
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
        <div className="mt-2 flex items-center gap-1 sm:mr-0">
          {/* 日本語、英語切り替え& */}
          <Ja_EnButton />
          {/* ダークモードボタン */}
          <ThemeButton />
          {/* ハンバーガーメニュー */}
          <HamburgerMenu />
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
      <NavBar />
      {/* カテゴリ一覧ボックス*/}
      <CategoryBox />
      {/* 月別アーカイブボックス */}
      <ArchiveBox />
    </div>
  );
}
