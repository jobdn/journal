import React from "react";
import { cn } from "shared/lib";
import { Button } from "shared/ui/Button";

import { ArticleCodeBlock } from "../../types/Article";
import classes from "./ArticleCodeBlockComponent.module.scss";

import ClipboardIcon from "../../assets/clipboard.svg";

interface ArticleCodeBlockComponentProps extends Partial<ArticleCodeBlock> {
  className?: string;
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> =
  (props) => {
    const { className, code } = props;
    const handleCopy = React.useCallback(() => {
      navigator.clipboard.writeText(code || "");
    }, [code]);

    return (
      <pre className={cn(classes.ArticleCodeBlockComponent, {}, [className])}>
        <Button className={classes.copyBtn} onClick={handleCopy}>
          <ClipboardIcon className="secondary-icon" />
        </Button>
        <code>{code}</code>
      </pre>
    );
  };
