import React from "react";

import classes from "./ArticleListItem.module.scss";

import { ArticleListView } from "../../types/Article";
import { Skeleton } from "shared/ui/Skeleton";
import { Card } from "shared/ui/Card";
import { cn } from "shared/lib";

export const ArticleListItemSkeleton: React.FC<{
  view: ArticleListView;
  className?: string;
}> = React.memo(function ArticleListItem(props) {
  const { view, className } = props;

  const articleTopics = React.useMemo(() => {
    return Array(8)
      .fill(1)
      .map((_, i) => (
        <Skeleton
          key={i}
          width={40}
          height={20}
          borderRadius={8}
          style={{ flexShrink: 0 }}
        />
      ));
  }, []);

  if (view === "list") {
    return (
      <div className={cn("", {}, [classes[view], className])}>
        <Card>
          <div className={classes.mainInfo}>
            <div className={classes.author}>
              <Skeleton height={30} width={30} variant="circle" />
              <Skeleton height={24} width={150} />
            </div>
            <Skeleton height={24} width={200} />
          </div>
          <div className={classes.hero}>
            <Skeleton height={200} />
          </div>

          <div className={classes.articleTypes}>{articleTopics}</div>

          <Skeleton height={24} style={{ marginBottom: 8 }} />

          <div className={classes.footer}>
            <Skeleton height={44} width={180} borderRadius={8} />
            <div className={classes.stats}>
              <Skeleton height={24} width={40} borderRadius={20} />
              <Skeleton height={24} width={100} />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classes[view]}>
      <Card>
        <div className={classes.hero}>
          <Skeleton height={200} />
        </div>

        <div className={classes.info}>
          <div className={classes.articleTypes}>{articleTopics}</div>

          <div className={classes.stats}>
            <Skeleton height={16} width={100} />
          </div>
        </div>
        <Skeleton height={16} width={150} />
      </Card>
    </div>
  );
});
