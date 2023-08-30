import "src/styles/components.css";
import Image from "next/image";
import FooterImage from "../../public/Season Everything With Love.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto mb-12 mt-24 flex h-32 w-full flex-col items-center justify-center border-t-[1px] border-[#773b01] pt-16">
      <div className="mb-2 flex gap-5 text-sm sm:text-base ">
        <Link href="/profile" className="menu-text-hover">
          ABOUT
        </Link>
        <span>|</span>
        <Link href="/privacypolicy" className="menu-text-hover">
          PRIVACY POLICY
        </Link>
        <span>|</span>
        <Link href="/contact" className="menu-text-hover">
          CONTACT
        </Link>
      </div>
      <div>
        <Image src={FooterImage} width="0" height="0" alt="footer-image" className="h-20 w-20" />
      </div>
    </div>
  );
}
