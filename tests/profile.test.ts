import { describe, expect, it } from "vitest";
import * as content from "@/content/profile";

const serialized = JSON.stringify(content);

describe("profile integrity", () => {
  it("never contains a plain email or obvious personal data", () => {
    expect(serialized).not.toMatch(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
    expect(serialized).not.toMatch(/\b33\d{8}\b/); // IT mobile shape
    expect(serialized.toLowerCase()).not.toContain("redacted-town");
    expect(serialized).not.toContain("00000");
    expect(serialized).not.toContain("YYYY");   // DOB year — periods only use >= 2018
  });

  it("uses the exact public location string", () => {
    expect(content.profile.location).toBe("Puglia, Italy");
  });

  it("never claims a degree", () => {
    expect(serialized).not.toMatch(/B\.?Sc|Bachelor|Laurea|degree in/i);
    expect(serialized).toContain("Computer Science studies");
  });

  it("has 4 projects in the curated order", () => {
    expect(content.projects.map((p) => p.title)).toEqual([
      "libreria-api",
      "This Portfolio",
      "FinanzaQui",
      "PasswordManager",
    ]);
  });

  it("every project states a problem and a stack", () => {
    for (const p of content.projects) {
      expect(p.problem.length).toBeGreaterThan(40);
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });
});
