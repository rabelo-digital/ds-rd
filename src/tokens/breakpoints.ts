// Matches Bootstrap grid for migration continuity
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

export type BreakpointKey = keyof typeof breakpoints;

export function mediaQuery(bp: BreakpointKey): string {
  return `@media (min-width: ${breakpoints[bp]}px)`;
}
