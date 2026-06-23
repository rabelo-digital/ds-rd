import * as RadixTooltip from "@radix-ui/react-tooltip";
import React from "react";

import styles from "./Tooltip.module.css";

export type TooltipSide = "top" | "right" | "bottom" | "left";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  side?: TooltipSide;
  delayDuration?: number;
}

export const TooltipProvider = RadixTooltip.Provider;

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = "top",
  delayDuration = 300
}) => (
  <RadixTooltip.Root delayDuration={delayDuration}>
    <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
    <RadixTooltip.Portal>
      <RadixTooltip.Content side={side} className={styles.content} sideOffset={6}>
        {content}
        <RadixTooltip.Arrow className={styles.arrow} />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  </RadixTooltip.Root>
);

Tooltip.displayName = "Tooltip";
