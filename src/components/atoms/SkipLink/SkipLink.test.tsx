import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { SkipLink } from "./SkipLink";

describe("SkipLink", () => {
  it("links to main content by default", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: "Pular para o conteúdo" });
    expect(link).toHaveAttribute("href", "#main-content");
  });
});
