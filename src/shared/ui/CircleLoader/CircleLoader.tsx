import React from "react";
import { cn } from "shared/lib";
import { Text } from "../Text";

import "./CircleLoader.scss";

interface CircleLoaderProps {
  className?: string;
  text?: string;
  align?: "left" | "center" | "right";
}

export const CircleLoader: React.FC<CircleLoaderProps> = (props) => {
  const { className, text, align = "left" } = props;
  return (
    <div className={cn("CircleLoader", {}, [className, align])}>
      <div className="lds-dual-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {text && <Text text={text} />}
    </div>
  );
};
