import React from "react";

import styles from "./Badge.module.css";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "info";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "md",
  children,
  className
}) => (
  <span
    className={[styles.badge, styles[variant], styles[size], className ?? ""]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </span>
);

Badge.displayName = "Badge";
