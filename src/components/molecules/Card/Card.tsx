import React from "react";
import styles from "./Card.module.css";
import type { ElevationKey, RadiiKey } from "../../../tokens";

export interface CardProps {
  elevation?: ElevationKey;
  radius?: RadiiKey;
  className?: string;
  children: React.ReactNode;
}

interface CardSectionProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader: React.FC<CardSectionProps> = ({ children, className }) => (
  <div className={[styles.header, className ?? ""].filter(Boolean).join(" ")}>
    {children}
  </div>
);

const CardBody: React.FC<CardSectionProps> = ({ children, className }) => (
  <div className={[styles.body, className ?? ""].filter(Boolean).join(" ")}>
    {children}
  </div>
);

const CardFooter: React.FC<CardSectionProps> = ({ children, className }) => (
  <div className={[styles.footer, className ?? ""].filter(Boolean).join(" ")}>
    {children}
  </div>
);

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ elevation = "sm", radius = "lg", className, children }) => (
  <div
    className={[styles.card, className ?? ""].filter(Boolean).join(" ")}
    style={{
      boxShadow: `var(--ds-elevation-${elevation})`,
      borderRadius: `var(--ds-radius-${radius})`,
    }}
  >
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.displayName = "Card";
