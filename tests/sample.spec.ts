import playwright = require('@playwright/test');

const { test, expect } = playwright;


test('verify the Playwright website title', async ({ page }) => {
 await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});