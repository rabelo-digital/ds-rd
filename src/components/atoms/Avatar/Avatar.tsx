import React, { useState } from "react";

import styles from "./Avatar.module.css";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = "md",
  shape = "circle",
  className
}) => {
  const [imgError, setImgError] = useState(false);
  const initials = name ? getInitials(name) : null;
  const showImage = src && !imgError;

  const wrapperClass = [styles.avatar, styles[size], styles[shape], className ?? ""]
    .filter(Boolean)
    .join(" ");

  if (showImage) {
    return (
      <span className={wrapperClass}>
        <img
          src={src}
          alt={alt ?? name ?? ""}
          className={styles.image}
          onError={() => setImgError(true)}
        />
      </span>
    );
  }

  return (
    <span className={wrapperClass} role="img" aria-label={alt ?? name ?? "Avatar"}>
      <span className={styles.initials} aria-hidden="true">
        {initials ?? "?"}
      </span>
    </span>
  );
};

Avatar.displayName = "Avatar";
