import { test, expect } from '@playwright/test';

test('landing page loads and dashboard link works', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Welcome to SaaS Template')).toBeVisible();
  await page.click('a[href="/dashboard"]');
  await expect(page).toHaveURL(/.*\/dashboard/);
});
