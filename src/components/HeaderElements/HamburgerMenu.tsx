// ハンバーガーメニュー（sm以下のときに出現）
import "src/styles/components.css";
import Link from "next/link";

const HamburgerMenu = () => {
  return (
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
  );
};

export default HamburgerMenu;
