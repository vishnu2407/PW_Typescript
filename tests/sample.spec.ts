import playwright = require('@playwright/test');

const { test, expect } = playwright;

test('verify the Flipkart website title', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

  // Verify the page title
  await expect(page).toHaveTitle(/Flipkart/i);

  // Verify the search box is visible
  await expect(
    page.getByRole('textbox', {
      name: /search for products, brands and more/i,
    })
  ).toBeVisible();
});
