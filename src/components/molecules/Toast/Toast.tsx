import * as RadixToast from "@radix-ui/react-toast";
import React, { createContext, useCallback, useContext, useState } from "react";

import styles from "./Toast.module.css";

export type ToastVariant = "default" | "success" | "warning" | "error" | "info";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  show: (message: Omit<ToastMessage, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const show = useCallback((message: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...message, id }]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      <RadixToast.Provider swipeDirection="right">
        {children}
        {toasts.map((toast) => (
          <RadixToast.Root
            key={toast.id}
            duration={toast.duration ?? 4000}
            className={[styles.root, styles[toast.variant ?? "default"]].join(" ")}
            onOpenChange={(open) => {
              if (!open) dismiss(toast.id);
            }}
          >
            <div className={styles.content}>
              <div className={styles.text}>
                <RadixToast.Title className={styles.title}>{toast.title}</RadixToast.Title>
                {toast.description && (
                  <RadixToast.Description className={styles.description}>
                    {toast.description}
                  </RadixToast.Description>
                )}
              </div>
              <RadixToast.Close asChild>
                <button className={styles.close} aria-label="Fechar notificação">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M1 1l10 10M11 1L1 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </RadixToast.Close>
            </div>
          </RadixToast.Root>
        ))}
        <RadixToast.Viewport className={styles.viewport} aria-label="Notificações" role="region" />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};
