/**
 * Anti-scraper obfuscation (NOT cryptography): the address is stored
 * reversed and base64-encoded, decoded client-side only on user click,
 * so no plain email ever exists in static HTML, JS bundles or the repo.
 */
export function decodeEmail(encoded: string): string {
  const reversed =
    typeof atob === "function"
      ? atob(encoded)
      : Buffer.from(encoded, "base64").toString("utf8");
  return reversed.split("").reverse().join("");
}
