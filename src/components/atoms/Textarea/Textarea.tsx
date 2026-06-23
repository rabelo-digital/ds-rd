import React, { useId, useState } from "react";

import styles from "./Textarea.module.css";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCount?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, helperText, showCount = false, maxLength, className, id, onChange, ...props },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;
    const [count, setCount] = useState(typeof props.value === "string" ? props.value.length : 0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={[styles.textarea, error ? styles.error : "", className ?? ""]
            .filter(Boolean)
            .join(" ")}
          maxLength={maxLength}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={
            [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ") ||
            undefined
          }
          {...props}
        />
        <div className={styles.footer}>
          {error && (
            <span id={errorId} className={styles.errorText} role="alert">
              {error}
            </span>
          )}
          {helperText && !error && (
            <span id={helperId} className={styles.helperText}>
              {helperText}
            </span>
          )}
          {showCount && maxLength && (
            <span className={styles.counter} aria-live="polite">
              {count}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
