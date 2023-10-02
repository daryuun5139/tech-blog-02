import Image from "next/image";
import aboutImage from "../../public/animal_seal.svg";
import { categoryCount, getList, publishAtGroup } from "@/lib/dataQuery";
import CategoryBox from "./SideBarElements/CategoryBox";
import ArchiveBox from "./SideBarElements/ArchiveBox";
import { useTranslation } from "@/i18n";

type Props = {
  lng: string;
};

const SideBar = async ({ lng }: Props) => {
  const { archiveData } = await publishAtGroup();
  const { categories } = await getList();
  const category_arr = await categoryCount();
  const { t } = await useTranslation(lng, "sidebar");

  return (
    <div className="relative hidden w-[295px] lg:block">
      <div className="absolute top-14 my-3 ml-4 flex-col items-start">
        {/* 当ブロクについて */}
        <div className="mb-6 flex flex-col items-center justify-between rounded-sm border-[1px] border-[#773b01] p-3 ">
          <h2 className="p-2 text-lg font-bold text-black">ABOUT</h2>
          {/* <Image
            src={aboutImage}
            width="0"
            height="0"
            alt="aboutImage"
            className="h-auto w-full rounded-md"
            loading="eager"
          /> */}
          <div className="flex w-full flex-row flex-wrap justify-start p-4 text-black">
            <p className="mb-2 text-black">{t("text")}</p>
          </div>
        </div>
        {/* カテゴリ一覧ボックス */}
        <CategoryBox list={categories} count={category_arr} />
        {/* 月別アーカイブボックス */}
        <ArchiveBox list={archiveData} />
      </div>
    </div>
  );
};

export default SideBar;
