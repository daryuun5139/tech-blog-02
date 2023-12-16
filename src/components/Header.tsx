//Header

// 各Headerコンポーネントimport
import ThemeButton from "./HeaderElements/ThemeButton";
import HamburgerMenu from "./HeaderElements/HamburgerMenu";
import NavBar from "./HeaderElements/NavBar";
import CategoryBox from "./HeaderElements/CategoryBox";
import ArchiveBox from "./HeaderElements/ArchiveBox";
import Ja_EnButton from "./HeaderElements/Ja_EnButton";
import TopImage from "./HeaderElements/TopImage";
import TopImageSmall from "./HeaderElements/TopImageSmall";
// 各DataQuery関数のimport
import { categoryCount, getIdRelation, getList, publishAtGroup } from "@/lib/dataQuery";

type Props = {
  lng: string;
};

// export default async function Header({ lng }: Props) {

export default async function Header({ lng }: Props) {
  const { categories } = await getList();
  const category_arr = await categoryCount();
  const { archiveData } = await publishAtGroup();
  const { idList_ja, idList_en } = await getIdRelation();

  return (
    <div className="mx-auto flex w-full flex-col items-center">
      {/* ヒーローセクション */}
      <div className="relative flex w-full flex-row items-center justify-between sm:justify-end">
        {/* 画面縮小時表示イメージ */}
        <TopImageSmall lng={lng} />
        <div className="mt-2 flex items-center gap-2 sm:mr-0">
          {/* 日本語、英語切り替え */}
          <Ja_EnButton idList_ja={idList_ja} idList_en={idList_en} />
          {/* ダークモードボタン */}
          <ThemeButton />
          {/* ハンバーガーメニュー */}
          <HamburgerMenu />
        </div>
      </div>
      {/* メイン画像 */}
      <TopImage lng={lng} />
      {/* ナビゲーションバー */}
      <NavBar />
      {/* カテゴリ一覧ボックス*/}
      <CategoryBox list={categories} count={category_arr} />
      {/* 月別アーカイブボックス */}
      <ArchiveBox list={archiveData} />
    </div>
  );
}
