import playwright = require('@playwright/test');

const { test, expect } = playwright;

test('verify the Amazon website title', async ({ page }) => {
  // Step 1: Open Amazon India
  await page.goto('https://www.amazon.in');

  // Step 2: Verify the website title
  await expect(page).toHaveTitle(/Amazon\.in/i);

  // Step 3: Locate the search box using its ID
  const searchBox = page.locator('#twotabsearchtextbox');

  // Step 4: Wait until the search box is visible
  await expect(searchBox).toBeVisible();

  // Step 5: Enter the product name and search
  await searchBox.fill('iPhone 17 Pro Max');
  await searchBox.press('Enter');

  // Step 6: Verify that Amazon navigated to search results
  await expect(page).toHaveURL(/\/s\?/);

  // Step 7: Verify that at least one search result is visible
  const results = page.locator('[data-component-type="s-search-result"]');

  await expect(results.first()).toBeVisible();

});
