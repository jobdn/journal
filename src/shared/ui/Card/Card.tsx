import React, { HTMLAttributes } from "react";
import { cn } from "shared/lib";

import classes from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { className, children } = props;

  return <div className={cn(classes.Card, {}, [className])}>{children}</div>;
};
