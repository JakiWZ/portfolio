import { expect, test } from "@playwright/test";

const EMAIL_SHAPE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;

test("all sections render", async ({ page }) => {
  await page.goto("/");
  for (const id of ["work", "about", "skills", "experience", "contact"]) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
  await expect(
    page.getByRole("heading", { name: /full stack/i, level: 1 }),
  ).toBeVisible();
});

test("theme toggle switches between Ink and Paper", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  await expect(html).toHaveClass(/dark/);
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await expect(html).not.toHaveClass(/dark/);
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await expect(html).toHaveClass(/dark/);
});

test("email is hidden until revealed, then becomes a mailto link", async ({
  page,
}) => {
  await page.goto("/");
  expect(await page.content()).not.toMatch(EMAIL_SHAPE);
  await page.getByRole("button", { name: "Reveal email" }).click();
  const link = page.locator('a[href^="mailto:"]');
  await expect(link).toBeVisible();
  expect(await link.getAttribute("href")).toMatch(
    /^mailto:[^@\s]+@[^@\s]+\.[a-z]{2,}$/i,
  );
});

test("cv.pdf is served as a real PDF", async ({ request }) => {
  const response = await request.get("/cv.pdf");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).length).toBeGreaterThan(5_000); // matches pdf test threshold (react-pdf v4 compression)
});

test("privacy page is reachable", async ({ page }) => {
  await page.goto("/privacy");
  await expect(
    page.getByRole("heading", { name: /privacy/i, level: 1 }),
  ).toBeVisible();
});
