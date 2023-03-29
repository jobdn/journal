import React from "react";
import { useSelector } from "react-redux";

import {
  AsyncReducers,
  DynamicLoadingReducer,
  useAppDispatch,
  useInitialEffect,
} from "shared/lib";

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
import { ToggleArticleListView } from "features/ToggleArticleListView";
import { ArticleList, ArticleListView } from "entities/Article";
import { PageWrapper } from "shared/ui/PageWrapper";
import { fetchArticlesPart } from "../model/services/fetchArticlesPart/fetchArticlesPart";
import { fetchArticlesOnInit } from "../model/services/fetchArticlesOnInit/fetchArticlesOnInit";

const lazyReducers: AsyncReducers = { articlesPage: articlesPageReducer };

const ArticlesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectArticlesIsLoading);
  const error = useSelector(selectArticlesError);
  const articles = useSelector(articlesPageSelectors.selectAll);
  const view = useSelector(selectView);
  const rootRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  useInitialEffect(() => {
    dispatch(fetchArticlesOnInit());
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

  return (
    <DynamicLoadingReducer reducers={lazyReducers} removeAfterUnmount={false}>
      <PageWrapper rootRef={rootRef} intersectionCallback={loadNextArticles}>
        <ToggleArticleListView
          onToggleArticleListView={handleToggleArticleListView}
          currentView={view}
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
