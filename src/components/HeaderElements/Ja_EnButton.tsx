"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import "src/styles/components.css";

type Props = {
  idList_ja: { [key: string]: string };
  idList_en: { [key: string]: string };
};

const Ja_EnButton = ({ idList_ja, idList_en }: Props) => {
  const path = usePathname().slice(3);
  const { lng, id } = useParams();

  const Switch = () => {
    // 詳細記事ページの場合
    if (id) {
      // 詳細記事ページが日本語の場合
      if (lng === "ja") {
        return (
          <>
            <div className="hidden flex-row gap-2 text-sm sm:block">
              <span>日本語</span>
              <span> | </span>
              <Link
                href={`/en/${path.replace(id.toString(), idList_ja[id.toString()])}`}
                className="menu-text-hover"
              >
                英語
              </Link>
            </div>
            <div className="flex flex-row gap-1 text-sm sm:hidden">
              <span className="menu-text-hover">日</span>
              <span>|</span>
              <Link
                href={`/en/${path.replace(id.toString(), idList_ja[id.toString()])}`}
                className="menu-text-hover"
              >
                英
              </Link>
            </div>
          </>
        );
        // 詳細記事ページが英語の場合
      } else if (lng === "en") {
        return (
          <>
            <div className="hidden flex-row gap-2 text-sm sm:block">
              <Link
                href={`/ja/${path.replace(id.toString(), idList_en[id.toString()])}`}
                className="menu-text-hover"
              >
                Japanese
              </Link>
              <span> | </span>
              <span>English</span>
            </div>
            <div className="flex flex-row gap-1 text-sm sm:hidden">
              <Link
                href={`/ja/${path.replace(id.toString(), idList_en[id.toString()])}`}
                className="menu-text-hover"
              >
                Ja
              </Link>
              <span>|</span>
              <span>En</span>
            </div>
          </>
        );
      }
    } else {
      // 詳細記事ページ以外の場合
      // 日本語の場合
      if (lng === "ja") {
        return (
          <>
            <div className="hidden flex-row gap-2 text-sm sm:block">
              <span>日本語</span>
              <span> | </span>
              <Link href={`/en/${path}`} className="menu-text-hover">
                英語
              </Link>
            </div>
            <div className="flex flex-row gap-1 text-sm sm:hidden">
              <span>日</span>
              <span>|</span>
              <Link href={`/en/${path}`} className="menu-text-hover">
                英
              </Link>
            </div>
          </>
        );
        // 英語の場合
      } else if (lng === "en") {
        return (
          <>
            <div className="hidden flex-row gap-2 text-sm sm:block">
              <Link href={`/ja/${path}`} className="menu-text-hover">
                Japanese
              </Link>
              <span> | </span>
              <span>English</span>
            </div>
            <div className="flex flex-row gap-1 text-sm sm:hidden">
              <Link href={`/ja/${path}`} className="menu-text-hover">
                Ja
              </Link>
              <span>|</span>
              <span>En</span>
            </div>
          </>
        );
      }
    }
  };
  return (
    <>
      <Switch />
    </>
  );
};

export default Ja_EnButton;
