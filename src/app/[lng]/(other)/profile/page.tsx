import ProfileArea from "@/components/OtherElements/ProfileArea";

// generateMetadata: Metadataのtitleタグに月別のタイトルを動的に入れる;
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
  return (
    <>
      <div className="flex items-center justify-center pt-20">
        {/* プロフィールエリア */}
        <ProfileArea lng={lng} />
      </div>
    </>
  );
}
