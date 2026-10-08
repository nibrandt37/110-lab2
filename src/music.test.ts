import { describe, it, expect } from "vitest";
import { music } from "./music.ts";

describe("music", () => {
  it("should have at least 3 items", () => {
    expect(music.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Beauty Sleep'", () => {
    expect(music).toContain("Beauty Sleep");
  });
});