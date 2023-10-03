import "src/styles/components.css";
import Link from "next/link";

type Props = {
  lng: string;
};

export default function Footer({ lng }: Props) {
  return (
    <div className="mx-auto mb-12 mt-10 flex h-24 w-full flex-col items-center justify-center border-t-[1px] border-[#773b01] pt-8">
      <div className="mb-2 flex gap-5 text-sm sm:text-base ">
        <Link href={`/${lng}/profile`} className="menu-text-hover">
          ABOUT
        </Link>
        <span>|</span>
        <Link href={`/${lng}/privacypolicy`} className="menu-text-hover">
          PRIVACY POLICY
        </Link>
        <span>|</span>
        <Link href={`/${lng}/contact`} className="menu-text-hover">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
