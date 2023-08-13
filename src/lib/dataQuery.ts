import { client } from "@/lib/client";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Blog, Category, PublishGroup } from "@/types/blog";
import { formatDate } from "@/lib/timeFormat";

// ブログ、カテゴリ、公開日一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const [listData, categoryData, publishedAtData] = await Promise.all([
    client.getList<Blog>({ endpoint: "blogs", queries }),
    client.getList<Category>({ endpoint: "categories", queries }),
    client.getList<Blog>({ endpoint: "blogs", queries: { fields: "publishedAt", limit: 3000 } }),
  ]);
  return {
    contents: listData.contents,
    totalCount: listData.totalCount,
    categories: categoryData.contents,
    publishAt: publishedAtData.contents,
  };
};

// ブログの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};

//公開日一覧を月ごとにグループ化
export const publishAtGroup = async () => {
  const { publishAt } = await getList();
  const publishAtArray = publishAt.map((content) => formatDate(content.publishedAt));
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
