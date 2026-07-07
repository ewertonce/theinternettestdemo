// @ts-check
import { test, expect } from '@playwright/test'

test('clicking Redirect Link navigates to the redirector page', async ({ page }) => {
  await page.goto('/')

  const initialUrl = page.url()
  await page.getByRole('link', { name: 'Redirect Link' }).click()

  await expect(page).toHaveURL(/\/redirector/)
  expect(page.url()).not.toBe(initialUrl)
  await expect(page.getByRole('heading', { name: 'Redirection', level: 3 })).toBeVisible();
})

test('following the redirector link lands on the status codes page', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Redirect Link' }).click()
  await expect(page).toHaveURL(/\/redirector/)

  await page.getByRole('link', { name: 'here' }).click()

  await expect(page).toHaveURL(/\/status_codes/)
  await expect(page.getByRole('heading', { name: 'Status Codes', level: 3 })).toBeVisible();
})
