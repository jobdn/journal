import React from "react";
import { cn } from "shared/lib";
import { Text } from "../Text";

import "./CircleLoader.scss";

interface CircleLoaderProps {
  className?: string;
  text?: string;
}

export const CircleLoader: React.FC<CircleLoaderProps> = ({
  className,
  text,
}) => {
  return (
    <>
      <div className={cn("lds-dual-ring", {}, [className])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {text && <Text text={text} />}
    </>
  );
};
