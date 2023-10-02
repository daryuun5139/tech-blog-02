//月別記事一覧ページ（/archive/[yymm]/page/[number]/page.tsx）
import ArticleCard from "@/components/ArticleCard";
import { getList, publishAtGroup } from "@/lib/dataQuery";
import { Pagination } from "@/components/Paginaiton";
import { ArticleType, ArticleType_en } from "@/types/blog";

type paramsType = {
  yymm: string;
  number: string;
};

const PER_PAGE = 8;

// generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { totalCount } = await getList();
  const { archiveData } = await publishAtGroup();
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = Object.keys(archiveData).flatMap((item) =>
    range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => ({
      yymm: item,
      number: number.toString(),
    }))
  );
  return [...paths];
}

//generateMetadata : Metadataのtitleタグに月別のタイトルを動的に入れる
export async function generateMetadata({
  params: { yymm, lng },
}: {
  params: { yymm: string; lng: string };
}) {
  if (lng === "ja") {
    return {
      title: `${yymm.slice(0, 4)}年${yymm.slice(4)}月の記事一覧`,
    };
  } else if (lng === "en") {
    return {
      title: `Articles of ${yymm.slice(0, 4)}/${yymm.slice(4)}`,
    };
  }
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function ArchivePage({
  params: { yymm, number, lng },
}: {
  params: { yymm: string; number: string; lng: string };
}) {
  const pageName1 = "archive";
  const currentNumber = Number(number);
  const yymm_split = yymm.split("");
  yymm_split.splice(4, 0, "-");
  const targetArchive = yymm_split.join("");
  const filterContents = await getList({
    offset: (currentNumber - 1) * 8,
    limit: 8,
    filters: `publishedAt[contains]${targetArchive}`,
  });
  const contentsCount = filterContents.totalCount;

  function Card() {
    if (lng === "ja") {
      if (!filterContents.contents || filterContents.contents.length === 0) {
        return <p className="mx-auto flex py-11 text-center lg:text-lg">記事がありません。</p>;
      } else {
        return (
          <>
            {filterContents.contents.map((post: ArticleType) => {
              return (
                <ArticleCard
                  id={post.id}
                  mainTitle={post.mainTitle}
                  category={post.category}
                  mainImage={post.mainImage.url ?? ""}
                  headingText={post.headingText}
                  publishedAt={post.publishedAt ?? ""}
                  updatedAt={post.revisedAt ?? ""}
                />
              );
            })}
          </>
        );
      }
    } else if (lng === "en") {
      if (!filterContents.contents_en || filterContents.contents_en.length === 0) {
        return <p className="mx-auto flex py-11 text-center lg:text-lg">No Article</p>;
      } else {
        return (
          <>
            {filterContents.contents_en.map((post: ArticleType_en) => {
              return (
                <ArticleCard
                  id={post.id}
                  mainTitle={post.mainTitle}
                  category={post.category}
                  mainImage={post.mainImage.url ?? ""}
                  headingText={post.headingText}
                  publishedAt={post.publishedAt ?? ""}
                  updatedAt={post.revisedAt ?? ""}
                />
              );
            })}
          </>
        );
      }
    }
  }

  return (
    <>
      {/* 新着記事一覧ラッパー */}
      {lng === "ja" ? (
        <h2 className="pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
          {yymm.slice(0, 4)}年{yymm.slice(4)}月の記事一覧 ({currentNumber} /{" "}
          {Math.ceil(contentsCount / PER_PAGE)})
        </h2>
      ) : (
        <h2 className="pb-3 text-center font-medium text-black sm:text-lg md:pb-6 md:text-xl">
          Articles of {yymm.slice(0, 4)}/{yymm.slice(4)} ({currentNumber} /{" "}
          {Math.ceil(contentsCount / PER_PAGE)})
        </h2>
      )}
      <div className="flex flex-wrap justify-center sm:justify-between">
        <Card />
      </div>
      <Pagination
        totalCount={contentsCount}
        pageName1={pageName1}
        pageName2={yymm}
        currentNumber={currentNumber}
      />
    </>
  );
}
