import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { dir } from "i18next";
import { languages } from "../../i18n/setting";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Daryun's Tech Blog",
    template: "%s | Daryun's Tech Blog",
  },
  description: "This Blog is created by Daryun",
};

//generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams() {
  // return languages.map((lng) => ({ lng })); //修正部分before
  const paths = languages.map((lng) => lng); //修正部分
  return [...paths];
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:," sizes="any" />
      </head>
      <body className="`${inter.className}` dark:bg-darkgrey">
        <Providers>
          <div className="container mx-auto flex flex-col px-10 lg:w-[1200px] lg:px-0">
            <Header lng={lng} />
            <div className="min-h-[1200px]">{children}</div>
            <Footer lng={lng} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
