"use client";

import NavBar from "@/components/NewComponents/NavBar";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Home() {
  const { lng } = useParams();

  return (
    <>
      <NavBar />
      <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll ">
        {/* セクション１--------------------------------------------------------------------- */}
        <section id="top" className="h-screen w-full snap-start bg-orange-400 p-[10%]">
          <h1 className="text-5xl font-bold">Daryun's Tech Blog</h1>
        </section>
        {/* セクション２--------------------------------------------------------------------- */}
        <section id="about" className="h-screen w-full snap-start bg-red-400 p-[10%]">
          <div className="grid grid-cols-2">
            <h1 className="text-5xl font-bold">about me</h1>
            <div>
              <Link href={`/${lng}/profile`} className="text-lg font-semibold underline">
                more
              </Link>
            </div>
          </div>
        </section>
        {/* セクション３--------------------------------------------------------------------- */}
        <section id="portfolio" className="h-screen w-full snap-start bg-blue-400 p-[10%]">
          <div className="grid grid-cols-2">
            <h1 className="text-5xl font-bold">portfolio1</h1>
            <div>
              <Link href="" className="text-lg font-semibold underline">
                visit site
              </Link>
            </div>
          </div>
        </section>
        {/* セクション４-------------------------------------------------------------------- */}
        <section className="h-screen w-full snap-start bg-yellow-400 p-[10%]">
          <div className="grid grid-cols-2">
            <h1 className="text-5xl font-bold">portfolio2</h1>
            <div>
              <Link href="" className="text-lg font-semibold underline">
                visit site
              </Link>
            </div>
          </div>
        </section>
        {/* セクション５--------------------------------------------------------------------- */}
        <section className="h-screen w-full snap-start bg-green-400 px-[10%] py-[8%]">
          <div className="grid grid-cols-2">
            <h1 className="text-5xl font-bold">portfolio3</h1>
            <div>
              <Link href="" className="text-lg font-semibold underline">
                visit site
              </Link>
            </div>
          </div>
        </section>
        {/* セクション６--------------------------------------------------------------------- */}
        <section id="blog" className="h-screen w-full snap-start bg-pink-400 px-[10%] py-[8%]">
          <div className="grid grid-cols-2">
            <h1 className="text-5xl font-bold">blog</h1>
            <div>
              <Link href={`/${lng}/articles/page/1`} className="text-lg font-semibold underline">
                visit blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
