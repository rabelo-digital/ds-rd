import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

import styles from "./Modal.module.css";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  size?: ModalSize;
  children: React.ReactNode;
  trigger?: React.ReactElement;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onOpenChange,
  title,
  description,
  size = "md",
  children,
  trigger
}) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content
        className={[styles.content, styles[size]].join(" ")}
        aria-describedby={description ? "modal-description" : undefined}
      >
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
        {description && (
          <Dialog.Description id="modal-description" className={styles.description}>
            {description}
          </Dialog.Description>
        )}
        <div className={styles.body}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

Modal.displayName = "Modal";
