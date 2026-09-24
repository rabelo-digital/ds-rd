import React from "react";

import styles from "./IconButton.module.css";

export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  "aria-label": string;
  size?: IconButtonSize;
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = "md", className, children, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={[styles.iconButton, styles[size], className ?? ""].filter(Boolean).join(" ")}
      {...props}
    >
      <span aria-hidden="true">{children}</span>
    </button>
  )
);

IconButton.displayName = "IconButton";
