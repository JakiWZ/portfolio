import { describe, expect, it } from "vitest";
import { decodeEmail } from "@/lib/email";

function encodeEmail(plain: string): string {
  return Buffer.from(plain.split("").reverse().join(""), "utf8").toString(
    "base64",
  );
}

describe("decodeEmail", () => {
  it("round-trips a reversed-base64 email", () => {
    const dummy = "dev.example+test@example.org";
    expect(decodeEmail(encodeEmail(dummy))).toBe(dummy);
  });

  it("produces exactly one @ from the real encoded value", async () => {
    const { profile } = await import("@/content/profile");
    const decoded = decodeEmail(profile.emailEncoded);
    expect(decoded.match(/@/g)).toHaveLength(1);
    expect(decoded).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
  });
});
