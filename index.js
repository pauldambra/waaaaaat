import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("https://storybook.posthog.net");

  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
