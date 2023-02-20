import React from "react";

import { cn } from "shared/lib";
import { Loader } from "shared/ui/Loader";

import classes from "./AppLoader.module.scss";

interface AppLoaderProps {
  className?: string;
}

export const AppLoader: React.FC<AppLoaderProps> = ({ className }) => {
  return (
    <div className={cn(classes.AppLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
