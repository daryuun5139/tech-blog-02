// ナビゲーションバー
"use client";

import "src/styles/components.css";
import Link from "next/link";
import { useParams } from "next/navigation";

const NavBar = () => {
  const { lng } = useParams();

  return (
    <div className="hidden h-12 w-full items-center justify-center sm:block">
      <ul className="flex h-12 flex-row items-center justify-between border-y-[1px] border-[#773b01] px-12">
        <li>
          <Link href={`/${lng}/`} className="menu-text-hover text-lg font-semibold">
            HOME
          </Link>
        </li>
        <li>
          <Link href={`/${lng}/profile`} className="menu-text-hover text-lg font-semibold">
            PROFILE
          </Link>
        </li>
        <li>
          <Link href={`/${lng}/works`} className="menu-text-hover text-lg font-semibold">
            WORKS
          </Link>
        </li>
        <li>
          <Link href={`/${lng}/articles/page/1`} className="menu-text-hover text-lg font-semibold">
            ARTICLES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
