import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

import styles from "./Drawer.module.css";

export type DrawerSide = "left" | "right" | "top" | "bottom";

export interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  side?: DrawerSide;
  children: React.ReactNode;
  trigger?: React.ReactElement;
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpenChange,
  title,
  side = "right",
  children,
  trigger
}) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={[styles.content, styles[side]].join(" ")}>
        <div className={styles.header}>
          {title && <Dialog.Title className={styles.title}>{title}</Dialog.Title>}
          <Dialog.Close asChild>
            <button className={styles.close} aria-label="Fechar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 2l12 12M14 2L2 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </Dialog.Close>
        </div>
        <div className={styles.body}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

Drawer.displayName = "Drawer";
