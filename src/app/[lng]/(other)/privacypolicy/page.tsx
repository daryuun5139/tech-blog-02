export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
  if (lng === "ja") {
    return {
      title: "プライバシーポリシー",
    };
  } else if (lng === "en") {
    return {
      title: "PrivacyPolicy",
    };
  }
}

type ParamType = {
  params: { lng: string };
};

export default function PrivacyPolicy({ params: { lng } }: ParamType) {
  return (
    <>
      {lng === "ja" ? (
        <div className="title-deco-line flex w-full pt-[150px] text-2xl">準備中</div>
      ) : (
        <div className="title-deco-line flex w-full pt-[150px] text-2xl">Getting Ready</div>
      )}
    </>
  );
}
