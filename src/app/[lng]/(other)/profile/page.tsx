import ProfileArea from "@/components/OtherElements/ProfileArea";
import SkillArea from "@/components/OtherElements/SkillArea";
import { Metadata } from "next";
import { useTranslation } from "../../../../i18n/index";
import "src/styles/otherElements.css";

//generateMetadata : Metadataのtitleタグに月別のタイトルを動的に入れる
export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
  if (lng === "ja") {
    return {
      title: "このブログについて",
    };
  } else if (lng === "en") {
    return {
      title: "About this blog",
    };
  }
}

type ParamType = {
  params: { lng: string };
};

export default async function Profile({ params: { lng } }: ParamType) {
  const { t } = await useTranslation(lng, "profile");
  return (
    <>
      <div className="mx-auto flex items-center justify-center pt-20">
        <div className=" flex flex-col items-center justify-center">
          {/* プロフィールエリア */}
          <div className="frame text-center">
            <h1 className="pb-5 text-lg font-bold">Profile</h1>
            <p>{t("text")}</p>
          </div>
          {/* スキルエリア */}
          <SkillArea />
        </div>
      </div>
    </>
  );
}
