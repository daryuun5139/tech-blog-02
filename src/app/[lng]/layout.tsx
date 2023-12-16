import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { dir } from "i18next";
import { languages } from "../../i18n/setting";
import Header from "@/components/Header";

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
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning className="scroll-auto">
      <head>
        <link rel="icon" href="data:," sizes="any" />
      </head>
      <body className="`${inter.className}` dark:bg-darkgrey">
        <Providers>
          {/* <Header lng={lng} /> */}
          <div className="flex flex-col">
            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
