import { useTranslation } from "@/i18n";
import { Metadata } from "next";

//generateMetadata : Metadataのtitleタグに月別のタイトルを動的に入れる
export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
  if (lng === "ja") {
    return {
      title: "制作実績",
    };
  } else if (lng === "en") {
    return {
      title: "portfolios",
    };
  }
}

type ParamType = {
  params: { lng: string };
};

export default async function Works({ params: { lng } }: ParamType) {
  const { t } = await useTranslation(lng, "works");
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-center py-12 lg:w-[90%]">
        <h1 className="title-deco py-4">
          <span>works</span>
        </h1>
        {/* フィールド１つ目 */}
        <div className="my-4 flex w-full justify-between rounded-md p-5 px-7">
          <div className="flex h-80 w-[45%] items-center justify-center rounded-md border-[1px] border-black dark:border-[#773B01]">
            <p className="card-text text-lg dark:text-[#773B01]">coming soon</p>
          </div>
          <div className="my-auto ml-10 items-center px-2 text-black ">
            <h2 className="card-text text-lg dark:text-[#773B01]">{t("title1")}</h2>
            <h3 className="card-text text-lg dark:text-[#773B01]">{t("overview")}</h3>
            <p className="card-text text-base dark:text-[#773B01]">{t("overview1")} </p>
            <p className="card-text text-base dark:text-[#773B01]">{t("overview2")}</p>
            <h4 className="card-text text-lg dark:text-[#773B01]">{t("tech")}</h4>
            <p className="card-text text-base dark:text-[#773B01]">{t("tech1")}</p>
          </div>
        </div>
        {/* フィールド２つ目 */}
        <div className="my-4 flex w-full justify-between rounded-md p-5 px-7">
          <div className="flex h-80 w-[45%] items-center justify-center rounded-md border-[1px] border-black dark:border-[#773B01]">
            <p className="card-text text-lg dark:text-[#773B01]">coming soon</p>
          </div>
          <div className="my-auto ml-10 items-center px-2 text-black ">
            <h2 className="card-text text-lg dark:text-[#773B01]">{t("title1")}</h2>
            <h3 className="card-text text-lg dark:text-[#773B01]">{t("overview")}</h3>
            <p className="card-text text-base dark:text-[#773B01]">{t("overview1")} </p>
            <p className="card-text text-base dark:text-[#773B01]">{t("overview2")}</p>
            <h4 className="card-text text-lg dark:text-[#773B01]">{t("tech")}</h4>
            <p className="card-text text-base dark:text-[#773B01]">{t("tech1")}</p>
          </div>
        </div>
        {/* フィールド3つ目 */}
        <div className="my-4 flex w-full justify-between rounded-md p-5 px-7">
          <div className="flex h-80 w-[45%] items-center justify-center rounded-md border-[1px] border-black dark:border-[#773B01]">
            <p className="card-text text-lg dark:text-[#773B01]">coming soon</p>
          </div>
          <div className="my-auto ml-10 items-center px-2 text-black ">
            <h2 className="card-text text-lg dark:text-[#773B01]">{t("title1")}</h2>
            <h3 className="card-text text-lg dark:text-[#773B01]">{t("overview")}</h3>
            <p className="card-text text-base dark:text-[#773B01]">{t("overview1")} </p>
            <p className="card-text text-base dark:text-[#773B01]">{t("overview2")}</p>
            <h4 className="card-text text-lg dark:text-[#773B01]">{t("tech")}</h4>
            <p className="card-text text-base dark:text-[#773B01]">{t("tech1")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
