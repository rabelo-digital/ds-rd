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
  className,
}) => {
  const [imgError, setImgError] = useState(false);
  const initials = name ? getInitials(name) : null;
  const showImage = src && !imgError;

  return (
    <span
      className={[styles.avatar, styles[size], styles[shape], className ?? ""]
        .filter(Boolean)
        .join(" ")}
      aria-label={alt ?? name}
      role={alt || name ? "img" : undefined}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? ""}
          className={styles.image}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={styles.initials} aria-hidden="true">
          {initials ?? "?"}
        </span>
      )}
    </span>
  );
};

Avatar.displayName = "Avatar";
