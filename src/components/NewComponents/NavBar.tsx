// ナビゲーションバー
"use client";

import "src/styles/components.css";
import { useParams } from "next/navigation";

const NavBar = () => {
  const { lng } = useParams();

  return (
    <header className="sticky top-6 z-10 flex h-0 w-full justify-center">
      <nav>
        <ul className="flex w-fit gap-10 rounded-full bg-black/70 px-8 py-4">
          <li>
            <a
              href="#top"
              className="cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline hover:opacity-75"
            >
              Top
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline hover:opacity-75"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline hover:opacity-75"
            >
              Portfolios
            </a>
          </li>
          <li>
            <a
              href="blog"
              className="cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline hover:opacity-75"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
