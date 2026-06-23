import { describe, it, expect } from "vitest";
import { primitiveColors, semanticColors } from "./colors.primitive";
import { semanticColors as semantic } from "./colors.semantic";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { radii } from "./radii";
import { elevation } from "./elevation";
import { zIndex } from "./zIndex";
import { motion } from "./motion";
import { breakpoints } from "./breakpoints";

const HEX_REGEX = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
const CSS_VALUE_REGEX = /^[\d.]+(?:px|rem|em|%|ms|s)$|^none$|^rgba?\(|^cubic-bezier\(|^\d+$/;

describe("Primitive colors", () => {
  it("all color scales have values at expected stops", () => {
    const scales = ["blue", "teal", "orange", "red", "green", "yellow", "gray"] as const;
    const stops = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

    for (const scale of scales) {
      for (const stop of stops) {
        const value = primitiveColors[scale][stop];
        expect(value, `${scale}.${stop} should be a valid hex`).toMatch(HEX_REGEX);
      }
    }
  });

  it("white and black are valid hex values", () => {
    expect(primitiveColors.white).toMatch(HEX_REGEX);
    expect(primitiveColors.black).toMatch(HEX_REGEX);
  });
});

describe("Semantic colors", () => {
  it("primary colors are defined and non-empty", () => {
    expect(semantic.primary.default).toBeTruthy();
    expect(semantic.primary.hover).toBeTruthy();
    expect(semantic.primary.on).toBeTruthy();
  });

  it("all feedback color groups have default and subtle", () => {
    const groups = ["success", "warning", "error", "info"] as const;
    for (const group of groups) {
      expect(semantic[group].default, `${group}.default`).toBeTruthy();
      expect(semantic[group].subtle, `${group}.subtle`).toBeTruthy();
    }
  });

  it("text tokens are defined", () => {
    expect(semantic.text.default).toBeTruthy();
    expect(semantic.text.muted).toBeTruthy();
    expect(semantic.text.inverse).toBeTruthy();
  });

  it("border tokens are defined", () => {
    expect(semantic.border.default).toBeTruthy();
    expect(semantic.border.focus).toBeTruthy();
    expect(semantic.border.error).toBeTruthy();
  });
});

describe("Spacing tokens", () => {
  it("spacing 0 is 0px", () => {
    expect(spacing[0]).toBe("0px");
  });

  it("spacing 4 is 16px (4 × 4px base)", () => {
    expect(spacing[4]).toBe("16px");
  });

  it("all spacing values end in px", () => {
    for (const [, value] of Object.entries(spacing)) {
      expect(value).toMatch(/^\d+px$/);
    }
  });

  it("spacing scale is monotonically increasing", () => {
    const values = Object.values(spacing).map((v) => parseInt(v));
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThanOrEqual(values[i - 1]!);
    }
  });
});

describe("Typography tokens", () => {
  it("font sizes are defined for all scale stops", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;
    for (const size of sizes) {
      expect(typography.fontSize[size], `fontSize.${size}`).toBeTruthy();
    }
  });

  it("font weights cover the expected range", () => {
    expect(Number(typography.fontWeight.regular)).toBe(400);
    expect(Number(typography.fontWeight.bold)).toBe(700);
  });
});

describe("Radii tokens", () => {
  it("none is 0px", () => {
    expect(radii.none).toBe("0px");
  });

  it("full is a large value for pill shapes", () => {
    expect(parseInt(radii.full)).toBeGreaterThan(100);
  });
});

describe("Elevation tokens", () => {
  it("none is the string 'none'", () => {
    expect(elevation.none).toBe("none");
  });

  it("all non-none elevations are box-shadow strings", () => {
    const levels = ["sm", "md", "lg", "xl", "2xl"] as const;
    for (const level of levels) {
      expect(elevation[level]).toMatch(/rgba?\(/);
    }
  });
});

describe("Z-index tokens", () => {
  it("base is 0", () => {
    expect(zIndex.base).toBe(0);
  });

  it("layers form a monotonically increasing stack", () => {
    const { base, raised, dropdown, sticky, overlay, modal, toast, tooltip } = zIndex;
    expect(base).toBeLessThan(raised);
    expect(raised).toBeLessThan(dropdown);
    expect(dropdown).toBeLessThan(sticky);
    expect(sticky).toBeLessThan(overlay);
    expect(overlay).toBeLessThan(modal);
    expect(modal).toBeLessThan(toast);
    expect(toast).toBeLessThan(tooltip);
  });
});

describe("Motion tokens", () => {
  it("durations are valid ms values", () => {
    for (const [, value] of Object.entries(motion.duration)) {
      expect(value).toMatch(/^\d+ms$/);
    }
  });

  it("fast < normal < slow", () => {
    expect(parseInt(motion.duration.fast)).toBeLessThan(parseInt(motion.duration.normal));
    expect(parseInt(motion.duration.normal)).toBeLessThan(parseInt(motion.duration.slow));
  });
});

describe("Breakpoints", () => {
  it("xs starts at 0", () => {
    expect(breakpoints.xs).toBe(0);
  });

  it("breakpoints are monotonically increasing", () => {
    const { xs, sm, md, lg, xl, xxl } = breakpoints;
    expect(xs).toBeLessThan(sm);
    expect(sm).toBeLessThan(md);
    expect(md).toBeLessThan(lg);
    expect(lg).toBeLessThan(xl);
    expect(xl).toBeLessThan(xxl);
  });
});
