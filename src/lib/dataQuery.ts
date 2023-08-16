import { client } from "@/lib/client";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Blog, Category, PublishGroup, categoryArray } from "@/types/blog";
import { formatDate1 } from "@/lib/timeFormat";

// ブログ、カテゴリ、公開日一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const [listData, categoryData, publishedAtData, countByCategory] = await Promise.all([
    client.getList<Blog>({
      customRequestInit: {
        cache: "no-store",
      },
      endpoint: "blogs",
      queries,
    }),
    client.getList<Category>({
      customRequestInit: {
        cache: "no-store",
      },
      endpoint: "categories",
      queries,
    }),
    client.getList<Blog>({
      customRequestInit: {
        cache: "no-store",
      },
      endpoint: "blogs",
      queries: { fields: "publishedAt", limit: 300 },
    }),
    client.getList<Blog>({
      customRequestInit: {
        cache: "no-store",
      },
      endpoint: "blogs",
      queries: { fields: "category.category", limit: 300 },
    }),
  ]);
  return {
    contents: listData.contents,
    totalCount: listData.totalCount,
    categories: categoryData.contents,
    publishAt: publishedAtData.contents,
    countByCategory: countByCategory.contents,
  };
};

// ブログの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Blog>({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};

//公開日一覧を月ごとにグループ化
export const publishAtGroup = async () => {
  const { publishAt } = await getList();
  const publishAtArray = publishAt.map((content) => formatDate1(content.publishedAt));
  const publishGroup: PublishGroup = {} as PublishGroup;

  publishAtArray.forEach((item) => {
    if (publishGroup[item]) {
      publishGroup[item]++;
    } else {
      publishGroup[item] = 1;
    }
  });
  return {
    archiveData: publishGroup,
  };
};

//カテゴリ別のコンテンツ数を取得
export const categoryCount = async () => {
  const { countByCategory } = await getList();
  const array = countByCategory.map((item): string => item.category.category);
  const categoryArray: categoryArray = {} as categoryArray;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    categoryArray[item] = (categoryArray[item] || 0) + 1;
  }
  return categoryArray;
};
