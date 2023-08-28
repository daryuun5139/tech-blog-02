//月別記事一覧ページ（/archive/[yymm]/page/[number]/page.tsx）
import ArticleCard from "@/components/ArticleCard";
import { getList, publishAtGroup } from "@/lib/dataQuery";
import { Pagination } from "@/components/Paginaiton";
import { ArticleType } from "@/types/blog";

type paramsType = {
  yymm: string;
  number: string;
};

const PER_PAGE = 5;

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
export async function generateMetadata({ params: yymm }: { params: { yymm: string } }) {
  return {
    title: `${yymm.yymm.slice(0, 4)}年${yymm.yymm.slice(4)}月の記事一覧`,
  };
}

//paramsはURLのパスパラメータが格納されている。
//{ params: { id } }: { params: { id: string }は前半分が分割代入引数、後半部分は型注釈。
export default async function ArchivePage({
  params: { yymm, number },
}: {
  params: { yymm: string; number: string };
}) {
  const pageName1 = "archive";
  const currentNumber = Number(number);
  const yymm_split = yymm.split("");
  yymm_split.splice(4, 0, "-");
  const targetArchive = yymm_split.join("");
  const filterContents = await getList({
    offset: (currentNumber - 1) * 5,
    limit: 5,
    filters: `publishedAt[contains]${targetArchive}`,
  });
  const contentsCount = filterContents.totalCount;

  return (
    <>
      {/* 新着記事一覧ラッパー */}
      <h2 className="text-center text-xl font-bold">
        {yymm.slice(0, 4)}年{yymm.slice(4)}月の記事一覧({currentNumber} /{" "}
        {Math.ceil(contentsCount / PER_PAGE)})
      </h2>
      <div className="flex flex-col justify-center p-2">
        <ul>
          {filterContents.contents.map((post: ArticleType) => {
            return (
              <li key={post.id}>
                <ArticleCard
                  id={post.id}
                  mainTitle={post.mainTitle}
                  category={post.category}
                  mainImage={post.mainImage.url ?? ""}
                  headingText={post.headingText}
                  publishedAt={post.publishedAt ?? ""}
                  updatedAt={post.revisedAt ?? ""}
                />
              </li>
            );
          })}
        </ul>
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
