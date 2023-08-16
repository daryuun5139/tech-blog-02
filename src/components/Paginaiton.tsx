"use client";

import Link from "next/link";

type PaginationProps = {
  totalCount: number;
  pageName1: string;
  pageName2?: string;
  currentNumber?: number;
};

export const Pagination = ({
  totalCount,
  pageName1,
  pageName2,
  currentNumber,
}: PaginationProps) => {
  const PER_PAGE = 5;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div className="flex items-center justify-center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <div key={index} className="mx-3 text-lg">
          {pageName1 === "articles" ? (
            <Link className="" href={`/${pageName1}/page/${number}`}>
              {number}
            </Link>
          ) : (
            <Link href={`/${pageName1}/${pageName2}/page/${number}`}>{number}</Link>
          )}
        </div>
      ))}
    </div>
  );
};
