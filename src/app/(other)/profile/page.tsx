import ProfileArea from "@/components/OtherElements/ProfileArea";
import SkillArea from "@/components/OtherElements/SkillArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "このブログについて",
};

export default function Profile() {
  return (
    <>
      <div className="mx-auto flex items-center justify-center pt-20">
        <div className=" flex flex-col items-center justify-center">
          {/* プロフィールエリア */}
          <ProfileArea />
          {/* スキルエリア */}
          <SkillArea />
        </div>
      </div>
    </>
  );
}
