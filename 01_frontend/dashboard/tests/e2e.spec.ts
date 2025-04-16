import { test, expect } from '@playwright/test';

test('dashboard loads and shows upgrade button', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Dashboard')).toBeVisible();
  await expect(page.getByRole('button', { name: /upgrade/i })).toBeVisible();
});
