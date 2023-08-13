import Link from "next/link";

type PaginationProps = {
  totalCount: number;
};

export const Pagination = ({ totalCount }: PaginationProps) => {
  const PER_PAGE = 5;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div className="flex items-center justify-center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <div key={index} className="mx-3 text-lg">
          <Link href={`/articles/page/${number}`}>{number}</Link>
        </div>
      ))}
    </div>
  );
};
