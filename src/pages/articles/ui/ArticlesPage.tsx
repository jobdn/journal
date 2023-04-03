import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  AsyncReducers,
  DynamicLoadingReducer,
  useAppDispatch,
  useInitialEffect,
} from "shared/lib";
import { ToggleArticleListView } from "features/ToggleArticleListView";
import { ArticleList, ArticleListView } from "entities/Article";
import { PageWrapper } from "widgets/PageWrapper";

import {
  articlesPageReducer,
  articlesPageSelectors,
  articlesPageActions,
} from "../model/slices/articlesPageSlice";
import {
  selectArticlesError,
  selectArticlesIsLoading,
  selectView,
} from "../model/selectors/articlesSelectors";
import { fetchArticlesPart } from "../model/services/fetchArticlesPart/fetchArticlesPart";
import { fetchArticlesOnInit } from "../model/services/fetchArticlesOnInit/fetchArticlesOnInit";
import { fetchArticles } from "../model/services/fetchArticles/fetchArticles";

import { ArticlesFilter } from "widgets/ArticlesFilter";
import { articlesFilterReducer } from "widgets/ArticlesFilter";
import { Text } from "shared/ui/Text";

const lazyReducers: AsyncReducers = {
  articlesPage: articlesPageReducer,
  articlesFilter: articlesFilterReducer,
};

const ArticlesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectArticlesIsLoading);
  const error = useSelector(selectArticlesError);
  const articles = useSelector(articlesPageSelectors.selectAll);
  const [searchParams] = useSearchParams();

  const view = useSelector(selectView);

  useInitialEffect(() => {
    dispatch(fetchArticlesOnInit(searchParams));
  });

  const loadNextArticles = () => {
    dispatch(fetchArticlesPart());
  };

  const handleToggleArticleListView = React.useCallback(
    (view: ArticleListView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  if (error)
    return (
      <PageWrapper error={!!error}>
        <Text title={error} align="center" variant="error" />
      </PageWrapper>
    );

  const handleFiltersChange = () =>
    dispatch(fetchArticles({ replacePage: true }));

  return (
    <DynamicLoadingReducer reducers={lazyReducers} removeAfterUnmount={false}>
      <PageWrapper intersectionCallback={loadNextArticles} error={!!error}>
        <ArticlesFilter
          viewToggler={
            <ToggleArticleListView
              onToggleArticleListView={handleToggleArticleListView}
              currentView={view}
            />
          }
          fetchData={handleFiltersChange}
        />
        <ArticleList
          articleList={articles}
          view={view}
          isLoading={isLoading}
          error={error}
        />
      </PageWrapper>
    </DynamicLoadingReducer>
  );
};

export default ArticlesPage;
