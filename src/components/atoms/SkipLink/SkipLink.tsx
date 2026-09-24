import React from "react";

import styles from "./SkipLink.module.css";

export interface SkipLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href?: string;
  children?: React.ReactNode;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  href = "#main-content",
  children = "Pular para o conteúdo",
  className,
  ...props
}) => (
  <a
    href={href}
    className={[styles.skipLink, className ?? ""].filter(Boolean).join(" ")}
    {...props}
  >
    {children}
  </a>
);

SkipLink.displayName = "SkipLink";
