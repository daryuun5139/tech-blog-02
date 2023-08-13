import Image from "next/image";
import FooterImage from "../../public/Season Everything With Love.svg";

export default function Footer() {
  return (
    <div className="mx-auto mb-12 mt-24 flex h-32 w-[90%] flex-col items-center justify-center border-t-[1px] border-[#773b01] pt-16">
      <div className="mb-2 flex gap-5">
        <h3>ABOUT</h3>
        <span>|</span>
        <h3>PRIVACY POLICY</h3>
        <span>|</span>
        <h3>CONTACT</h3>
      </div>
      <div>
        <Image src={FooterImage} width="0" height="0" alt="footer-image" className="h-20 w-20" />
      </div>
    </div>
  );
}
