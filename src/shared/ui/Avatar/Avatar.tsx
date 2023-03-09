import React from "react";
import { cn } from "shared/lib";

import classes from "./Avatar.module.scss";

export type AvatarVariant = "square" | "circle";

interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
  size?: number;
  variant?: AvatarVariant;
}

export const Avatar: React.FC<AvatarProps> = React.memo(function Avatar(props) {
  const { className, alt, src, size, variant = "square" } = props;

  const avatarStyle = React.useMemo<React.CSSProperties>(
    () => ({
      height: size,
      width: size,
    }),
    [size]
  );

  return (
    <img
      src={src}
      alt={alt}
      style={avatarStyle}
      className={cn(classes.Avatar, {}, [className, classes[variant]])}
    />
  );
});
