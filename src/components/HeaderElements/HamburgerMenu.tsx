// ハンバーガーメニュー（sm以下のときに出現）
import "src/styles/components.css";
import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <div className="flex w-full flex-col sm:hidden">
      <input id="hamburger-acd-check1" className="hamburger-acd-check" type="checkbox" />
      <label
        className="hamburger-acd-label  z-20 h-10 w-10 text-center text-lg font-bold text-black"
        htmlFor="hamburger-acd-check1"
      ></label>
      <ul className="hamburger-acd-content absolute left-0 top-0 z-10 flex w-full flex-col items-center justify-between gap-2 border-[1px] border-[#773b01] bg-[#FFFFFF] py-2">
        <li>
          <Link href="/" className="menu-text-hover text-xl text-black">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/profile" className="menu-text-hover text-xl text-black">
            PROFILE
          </Link>
        </li>
        <li>
          <Link href="/works" className="menu-text-hover text-xl text-black">
            WORKS
          </Link>
        </li>
        <li>
          <Link href="/articles/page/1" className="menu-text-hover text-xl text-black">
            ARTICLES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
