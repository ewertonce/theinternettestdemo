// @ts-check
import { test, expect } from '@playwright/test'

test('the-internet page has correct title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/The Internet/i);
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet', level: 1 })).toBeVisible();
})
