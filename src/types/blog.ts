import type { MicroCMSImage } from "microcms-js-sdk";

export type ArticleType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  mainImage: MicroCMSImage;
  category: CategoryType;
  mainText: TextElementType[];
};

export type TextElementType = {
  fieldId: "richEditor" | "markdown" | "richlink";
  richEditor: string;
  markdown: string;
  richlink: string;
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
  content: TextElementType[];
  title: string;
  category: CategoryType;
  imagePath: string;
  date: string;
  upDate: string;
};

export type ArticleDetailPropsType = {
  id: string;
  content: TextElementType[];
  category: CategoryType;
  title: string;
  imagePath: string;
  publishedAt: string;
};

export type PublishGroup = {
  [key: string]: number;
};

export type categoryArray = {
  [key: string]: number;
};
