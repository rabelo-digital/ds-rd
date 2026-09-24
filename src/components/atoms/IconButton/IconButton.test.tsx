import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("requires accessible name via aria-label", () => {
    render(
      <IconButton aria-label="Buscar">
        <span>🔍</span>
      </IconButton>
    );
    expect(screen.getByRole("button", { name: "Buscar" })).toBeInTheDocument();
  });
});
