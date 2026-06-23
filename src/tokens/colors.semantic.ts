import { primitiveColors } from "./colors.primitive";

export const semanticColors = {
  primary: {
    default: primitiveColors.blue[700],
    hover: primitiveColors.blue[600],
    active: primitiveColors.blue[800],
    subtle: primitiveColors.blue[50],
    muted: primitiveColors.blue[100],
    on: primitiveColors.white,
  },
  secondary: {
    default: primitiveColors.teal[500],
    hover: primitiveColors.teal[600],
    active: primitiveColors.teal[700],
    subtle: primitiveColors.teal[50],
    muted: primitiveColors.teal[100],
    on: primitiveColors.white,
  },
  accent: {
    default: primitiveColors.orange[500],
    hover: primitiveColors.orange[600],
    active: primitiveColors.orange[700],
    subtle: primitiveColors.orange[50],
    on: primitiveColors.white,
  },
  success: {
    default: primitiveColors.green[600],
    hover: primitiveColors.green[700],
    subtle: primitiveColors.green[50],
    muted: primitiveColors.green[100],
    on: primitiveColors.white,
  },
  warning: {
    default: primitiveColors.yellow[500],
    hover: primitiveColors.yellow[600],
    subtle: primitiveColors.yellow[50],
    muted: primitiveColors.yellow[100],
    on: primitiveColors.gray[900],
  },
  error: {
    default: primitiveColors.red[600],
    hover: primitiveColors.red[700],
    subtle: primitiveColors.red[50],
    muted: primitiveColors.red[100],
    on: primitiveColors.white,
  },
  info: {
    default: primitiveColors.blue[500],
    hover: primitiveColors.blue[600],
    subtle: primitiveColors.blue[50],
    muted: primitiveColors.blue[100],
    on: primitiveColors.white,
  },
  background: {
    default: primitiveColors.white,
    subtle: primitiveColors.gray[50],
    muted: primitiveColors.gray[100],
    overlay: "rgba(0, 0, 0, 0.5)",
  },
  surface: {
    default: primitiveColors.white,
    raised: primitiveColors.white,
    overlay: primitiveColors.white,
  },
  text: {
    default: primitiveColors.gray[800],
    muted: primitiveColors.gray[500],
    subtle: primitiveColors.gray[400],
    disabled: primitiveColors.gray[300],
    inverse: primitiveColors.white,
    link: primitiveColors.blue[700],
    linkHover: primitiveColors.blue[600],
  },
  border: {
    default: primitiveColors.gray[200],
    strong: primitiveColors.gray[300],
    muted: primitiveColors.gray[100],
    focus: primitiveColors.blue[500],
    error: primitiveColors.red[500],
  },
  disabled: {
    background: primitiveColors.gray[100],
    text: primitiveColors.gray[400],
    border: primitiveColors.gray[200],
  },
} as const;

export type SemanticColors = typeof semanticColors;
