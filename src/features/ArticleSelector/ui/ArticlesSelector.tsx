import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { cn } from "shared/lib";
import { Select } from "shared/ui/Select";
import { SortOrder } from "shared/types/SortOrder";

import { SortField } from "../model/types/SortField";

import classes from "./ArticlesSelector.module.scss";
import { SelectOptions } from "shared/ui/Select";

interface SelectArticlesByProps {
  className?: string;
  onOrderChange: (value: SortOrder) => void;
  onSortFieldChange: (value: SortField) => void;
  sort: SortField;
  order: SortOrder;
}

export const ArticlesSelector: React.FC<SelectArticlesByProps> = (props) => {
  const { className, onOrderChange, onSortFieldChange, order, sort } = props;
  const { t } = useTranslation("articles");

  const sortFieldOptions = React.useMemo<SelectOptions<SortField>>(
    () => [
      { value: SortField.TITLE, text: t("title") },
      { value: SortField.CREATED, text: t("createAt") },
      { value: SortField.VIEW, text: t("view") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18next.language]
  );

  const sortOrderOptions = React.useMemo<SelectOptions<SortOrder>>(
    () => [
      { value: "acs", text: t("asc_order") },
      { value: "desc", text: t("desc_order") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18next.language]
  );

  return (
    <div>
      <Select<SortField>
        className={cn(classes.sortField, {}, [className])}
        label={t("sort_by")}
        options={sortFieldOptions}
        value={sort}
        onChange={onSortFieldChange}
      />
      <Select<SortOrder>
        className={cn(classes.order, {}, [className])}
        label={t("sort_order")}
        options={sortOrderOptions}
        value={order}
        onChange={onOrderChange}
      />
    </div>
  );
};
