import { client } from "@/lib/client";
import type { MicroCMSQueries, GetListRequest, CustomRequestInit } from "microcms-js-sdk";
import type {
  ArticleType,
  ArticleType_en,
  CategoryType,
  PublishGroup,
  categoryArray,
} from "@/types/blog";
import { formatDate1 } from "@/lib/timeFormat";

// ブログ、カテゴリ、公開日一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const [listData, listData_en, categoryData, publishedAtData, countByCategory] = await Promise.all(
    [
      client.getList<ArticleType>({
        customRequestInit: {
          // cache: "no-store",
        },
        endpoint: "blogs",
        queries,
      }),
      client.getList<ArticleType_en>({
        customRequestInit: {
          // cache: "no-store",
        },
        endpoint: "blog_en",
        queries,
      }),
      client.getList<CategoryType>({
        customRequestInit: {
          // cache: "no-store",
        },
        endpoint: "categories",
        queries,
      }),
      client.getList<ArticleType>({
        customRequestInit: {
          // cache: "no-store",
        },
        endpoint: "blogs",
        queries: { fields: "publishedAt", limit: 300 },
      }),
      client.getList<ArticleType>({
        customRequestInit: {
          // cache: "no-store",
        },
        endpoint: "blogs",
        queries: { fields: "category.category", limit: 300 },
      }),
    ]
  );
  return {
    contents: listData.contents,
    contents_en: listData_en.contents,
    totalCount: listData.totalCount,
    categories: categoryData.contents,
    publishAt: publishedAtData.contents,
    countByCategory: countByCategory.contents,
  };
};

// ブログの詳細を取得（日本語）
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<ArticleType>({
    customRequestInit: {
      // cache: "no-store",
    },
    endpoint: "blogs",
    contentId,
    queries,
  });
  return detailData;
};

// ブログの詳細を取得（英語）
export const getDetail_en = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData_en = await client.getListDetail<ArticleType>({
    customRequestInit: {
      // cache: "no-store",
    },
    endpoint: "blog_en",
    contentId,
    queries,
  });
  return detailData_en;
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

// ブログのプレビューを取得（日本語）
export const getDraft = async (
  contentId: string,
  queries?: MicroCMSQueries & { draftKey: string }
) => {
  const draftData = await client.get<ArticleType>({
    // customRequestInit: { cache: "no-store" },
    endpoint: "blogs",
    contentId,
    queries,
  });
  return draftData;
};

// ブログのプレビューを取得（英語）
export const getDraft_en = async (
  contentId: string,
  queries?: MicroCMSQueries & { draftKey: string }
) => {
  const draftData_en = await client.get<ArticleType>({
    // customRequestInit: { cache: "no-store" },
    endpoint: "blog_en",
    contentId,
    queries,
  });
  return draftData_en;
};

//日文記事と英文記事の各IDデータ取得
export const getIdRelation = async () => {
  const { contents } = await getList({ fields: "id,blog_en.id", limit: 100 });
  const { contents_en } = await getList({ fields: "id,blog_ja.id", limit: 100 });

  type EmptyObject = { [key: string]: string };
  const idList_ja: EmptyObject = {};
  contents.map((n) => {
    idList_ja[n.id] = n.blog_en.id;
  });
  const idList_en: EmptyObject = {};
  contents_en.map((n) => {
    idList_en[n.id] = n.blog_ja.id;
  });
  return { idList_ja, idList_en };
};
