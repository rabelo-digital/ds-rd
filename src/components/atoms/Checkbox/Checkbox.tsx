import * as RadixCheckbox from "@radix-ui/react-checkbox";
import React, { useId } from "react";

import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  checked?: boolean | "indeterminate";
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
  label?: string;
  id?: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  label,
  id,
  className
}) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className={[styles.wrapper, className ?? ""].filter(Boolean).join(" ")}>
      <RadixCheckbox.Root
        id={checkboxId}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={styles.root}
      >
        <RadixCheckbox.Indicator className={styles.indicator}>
          {checked === "indeterminate" ? (
            <svg width="10" height="2" viewBox="0 0 10 2" fill="currentColor" aria-hidden="true">
              <rect width="10" height="2" rx="1" />
            </svg>
          ) : (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
              <path
                d="M1 4l2.5 2.5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label && (
        <label htmlFor={checkboxId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
