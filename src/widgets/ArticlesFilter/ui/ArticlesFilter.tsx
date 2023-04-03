import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { cn, useAppDispatch } from "shared/lib";
import { ArticlesSelector } from "features/ArticleSelector";

import classes from "./ArticlesFilter.module.scss";
import { useSelector } from "react-redux";
import { selectSearchText } from "../model/selectors/selectSearchText";
import { Input } from "shared/ui/Input";
import { articlesFilterActions } from "../model/slices/articlesFilterSlice";
import { SortOrder } from "shared/types/SortOrder";
import { SortField } from "features/ArticleSelector";
import { selectOrder } from "../model/selectors/selectOrder";
import { selectSort } from "../model/selectors/selectSort";
import { ArticleTopic, articleTopics } from "entities/Article";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import { TabItem, Tabs } from "shared/ui/Tabs";
import { selectArticleTopic } from "../model/selectors/selectArticleTopic";

interface ArticlesFilterProps {
  className?: string;
  viewToggler?: React.ReactNode;
  fetchData: () => void;
}

export const ArticlesFilter: React.FC<ArticlesFilterProps> = (props) => {
  const { t } = useTranslation("articles");
  const { className, viewToggler, fetchData } = props;
  const searchText = useSelector(selectSearchText);
  const order = useSelector(selectOrder);
  const sort = useSelector(selectSort);
  const articleTopic = useSelector(selectArticleTopic);
  const dispatch = useAppDispatch();

  const articleTopicTabs: TabItem[] = React.useMemo(
    () =>
      articleTopics.map((value) => {
        return { content: t(value), value };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18next.language]
  );

  const debouncedFetchData = useDebounce(fetchData, 500);

  const handleSearchChange = (value: string) => {
    dispatch(articlesFilterActions.setSearchText(value));
    debouncedFetchData();
  };

  const handleChangeSortField = (value: SortField) => {
    dispatch(articlesFilterActions.setSort(value));
    fetchData();
  };

  const handleChangeOrder = (value: SortOrder) => {
    dispatch(articlesFilterActions.setOrder(value));
    fetchData();
  };

  const handleTabClick = (tab: TabItem) => {
    dispatch(articlesFilterActions.setArticleTopic(tab.value as ArticleTopic));
    fetchData();
  };

  return (
    <div className={cn(classes.ArticlesFilter, {}, [className])}>
      <div className={classes.header}>
        <ArticlesSelector
          onOrderChange={handleChangeOrder}
          onSortFieldChange={handleChangeSortField}
          order={order}
          sort={sort}
        />
        {viewToggler ? viewToggler : null}
      </div>
      <Input
        onChange={handleSearchChange}
        value={searchText}
        variant="fullWidth"
        placeholder={t("title_search")}
        className={classes.input}
      />
      {/* CREATE ArticlesTopicTabs FEATURE  */}
      <Tabs
        className={classes.tabs}
        tabs={articleTopicTabs}
        activeTab={articleTopic}
        onTabClick={handleTabClick}
      />
    </div>
  );
};
