import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

import styles from "./SocialIcons.module.css";

export type SocialPlatform =
  | "linkedin"
  | "instagram"
  | "github"
  | "youtube"
  | "whatsapp"
  | "facebook"
  | "twitter";

export type SocialIconSize = "sm" | "md" | "lg";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

export interface SocialIconsProps {
  links: SocialLink[];
  size?: SocialIconSize;
  className?: string;
}

const ICON_MAP: Record<SocialPlatform, React.ElementType> = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  github: FaGithub,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  facebook: FaFacebookF,
  twitter: FaTwitter
};

const DEFAULT_LABELS: Record<SocialPlatform, string> = {
  linkedin: "Seguir no LinkedIn",
  instagram: "Seguir no Instagram",
  github: "Ver no GitHub",
  youtube: "Assistir no YouTube",
  whatsapp: "Conversar no WhatsApp",
  facebook: "Seguir no Facebook",
  twitter: "Seguir no Twitter"
};

export const SocialIcons: React.FC<SocialIconsProps> = ({ links, size = "md", className }) => (
  <ul className={[styles.list, className ?? ""].filter(Boolean).join(" ")}>
    {links.map(({ platform, url, label }) => {
      const Icon = ICON_MAP[platform];
      const ariaLabel = label ?? DEFAULT_LABELS[platform];
      return (
        <li key={platform}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={[styles.link, styles[size]].join(" ")}
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      );
    })}
  </ul>
);

SocialIcons.displayName = "SocialIcons";
