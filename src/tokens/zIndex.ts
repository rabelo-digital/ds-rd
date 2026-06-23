export const zIndex = {
  base: 0,
  raised: 1,
  dropdown: 1000,
  sticky: 1020,
  overlay: 1040,
  modal: 1050,
  toast: 1060,
  tooltip: 1070
} as const;

export type ZIndexKey = keyof typeof zIndex;
