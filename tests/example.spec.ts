import { test, expect } from "@playwright/test";

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
}) => {
  await page.goto("https://storybook.posthog.net");

  // create a locator
  await page.locator('[data-item-id="lemon-ui-lemon-button"]').click();
  await page
    .locator('[data-item-id="lemon-ui-lemon-button--types-and-statuses"]')
    .click();

  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
