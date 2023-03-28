import React from "react";
import { useSelector } from "react-redux";

import {
  AsyncReducers,
  cn,
  DynamicLoadingReducer,
  useAppDispatch,
  useInitialEffect,
} from "shared/lib";

import classes from "./ArticlesPage.module.scss";
import { fetchArticles } from "../model/services/fetchArticles";
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

interface ArticlesPageProps {
  className?: string;
}

const lazyReducers: AsyncReducers = { articlesPage: articlesPageReducer };

const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectArticlesIsLoading);
  const error = useSelector(selectArticlesError);
  const articles = useSelector(articlesPageSelectors.selectAll);
  const view = useSelector(selectView);

  useInitialEffect(() => {
    dispatch(fetchArticles());
  });

  const handleToggleArticleListView = React.useCallback(
    (view: ArticleListView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <div className={cn(classes.ArticlesPage, {}, [className])}>
      <DynamicLoadingReducer reducers={lazyReducers}>
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
      </DynamicLoadingReducer>
    </div>
  );
};

export default ArticlesPage;
