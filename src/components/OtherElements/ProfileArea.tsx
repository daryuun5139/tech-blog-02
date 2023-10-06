"use client";

import { useTranslation } from "../../i18n/index";
import "src/styles/otherElements.css";
import { Trans } from "react-i18next";

type Props = {
  lng: string;
};

const ProfileArea = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "profile");

  return (
    <div className="frame text-center">
      <h1 className="pb-5 text-lg font-bold">Profile</h1>
      <p className="py-4 text-start text-sm leading-8 lg:text-base lg:leading-8">
        <Trans t={t}>{"text1"}</Trans>
      </p>
      <p className="py-4 text-start text-sm leading-8 lg:text-base lg:leading-8">
        <Trans t={t}>{"text2"}</Trans>
      </p>
      <p className="py-4 text-start text-sm leading-8 lg:text-base lg:leading-8">
        <Trans t={t}>{"text3"}</Trans>
      </p>
    </div>
  );
};

export default ProfileArea;
