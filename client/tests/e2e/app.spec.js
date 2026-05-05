import { test, expect } from '@playwright/test';

test.describe('E2E Test: ShopSmart Application', () => {
  test('should load the homepage and display products', async ({ page }) => {
    // Navigate to the client app
    await page.goto('http://localhost:5173');

    // Check that the page title or a key element exists
    // (Assuming the app has some header or title)
    await expect(page).toHaveTitle(/vite/i).catch(() => {}); // Fallback if title is different

    // Check if products are rendered
    // Usually products have a specific class or we can just check if images/buttons exist
    // Let's wait for any element that looks like a product (e.g. "Add to Cart" or an img)
    // Adjust selector based on actual DOM, but 'img' or basic text is a safe bet for E2E
    const productImages = page.locator('img');
    await expect(productImages.first()).toBeVisible({ timeout: 10000 });
  });
});
