import type { MicroCMSImage } from "microcms-js-sdk";

export type ArticleType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  mainTitle: string;
  mainImage: MicroCMSImage;
  category: CategoryType;
  headingText: headingTextType;
  statusNow: string;
  mainText: ChapterType[];
  footerText: footerTextType;
  blog_en: ArticleType_en;
};

export type ArticleType_en = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  mainTitle: string;
  mainImage: MicroCMSImage;
  category: CategoryType;
  headingText: headingTextType;
  statusNow: string;
  mainText: ChapterType[];
  footerText: footerTextType;
  blog_ja: ArticleType;
};

export type headingTextType = {
  fieldId: "headingText";
  headingText: string;
};

export type footerTextType = {
  fieldId: "footerText";
  title: string;
  footerText: string;
};

export type ChapterType = {
  fieldId: "chapter1" | "chapter2" | "chapter3";
  title: string;
  content: ChapterContentType[];
};

export type ChapterContentType = {
  fieldId: "richEditor" | "markdown" | "richlink" | "image" | "subTitle";
  richEditor: string;
  markdown: string;
  richlink: string;
  image: MicroCMSImage;
  subTitle: string;
};

export type CategoryType = {
  id: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  iconimage: MicroCMSImage;
};

export type ArticleCardPropsType = {
  id: string;
  mainTitle: string;
  category: CategoryType;
  mainImage: string;
  headingText: headingTextType;
  publishedAt: string;
  updatedAt: string;
};

export type ArticleDetailPropsType = {
  id: string;
  publishedAt: string;
  mainTitle: string;
  mainImage: string;
  category: CategoryType;
  headingText: headingTextType;
  statusNow: string;
  mainText: ChapterType[];
  footerText: footerTextType;
};

export type PublishGroup = {
  [key: string]: number;
};

export type categoryArray = {
  [key: string]: number;
};
