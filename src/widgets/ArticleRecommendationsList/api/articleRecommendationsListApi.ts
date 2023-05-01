import { rtkApi } from "shared/api/rtkApi";

const articleRecommendationsListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchArticleRecommendations: build.query({
      query: (limit) => ({
        url: "/articles",
        params: {
          _expand: "user",
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useFetchArticleRecommendationsQuery } =
  articleRecommendationsListApi;
