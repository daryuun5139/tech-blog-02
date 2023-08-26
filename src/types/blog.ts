import type { MicroCMSImage } from "microcms-js-sdk";

export type Blog = {
  id: string;
  content: string;
  title: string;
  category: Category;
  eyecatch?: MicroCMSImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = {
  id: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  iconimage: MicroCMSImage;
};

export type ArticleCardProps = {
  id: string;
  content: string;
  title: string;
  category?: Category;
  imagePath: string;
  date: string;
  upDate: string;
};

export type ArticleDetail = {
  id: string;
  content: string;
  category: Category;
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
