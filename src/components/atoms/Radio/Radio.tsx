import React, { useId } from "react";
import * as RadixRadio from "@radix-ui/react-radio-group";
import styles from "./Radio.module.css";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  orientation = "vertical",
  className,
}) => {
  const baseId = useId();

  return (
    <RadixRadio.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      name={name}
      orientation={orientation}
      className={[styles.group, styles[orientation], className ?? ""].filter(Boolean).join(" ")}
    >
      {options.map((option) => {
        const radioId = `${baseId}-${option.value}`;
        return (
          <div key={option.value} className={styles.item}>
            <RadixRadio.Item
              id={radioId}
              value={option.value}
              disabled={option.disabled ?? disabled}
              className={styles.radio}
            >
              <RadixRadio.Indicator className={styles.indicator} />
            </RadixRadio.Item>
            <label htmlFor={radioId} className={styles.label}>
              {option.label}
            </label>
          </div>
        );
      })}
    </RadixRadio.Root>
  );
};

RadioGroup.displayName = "RadioGroup";
