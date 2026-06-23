import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";

import styles from "./Tabs.module.css";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultValue,
  value,
  onValueChange,
  className
}) => (
  <RadixTabs.Root
    defaultValue={defaultValue ?? tabs[0]?.value}
    value={value}
    onValueChange={onValueChange}
    className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
  >
    <RadixTabs.List className={styles.list} aria-label="Tabs">
      {tabs.map((tab) => (
        <RadixTabs.Trigger
          key={tab.value}
          value={tab.value}
          disabled={tab.disabled}
          className={styles.trigger}
        >
          {tab.label}
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>
    {tabs.map((tab) => (
      <RadixTabs.Content key={tab.value} value={tab.value} className={styles.content}>
        {tab.content}
      </RadixTabs.Content>
    ))}
  </RadixTabs.Root>
);

Tabs.displayName = "Tabs";
