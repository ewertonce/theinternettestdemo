// @ts-check
import { test, expect } from '@playwright/test'

test('opening status code 200 shows the 200 status code page', async ({ page }) => {
  await page.goto('/status_codes')

  const [response] = await Promise.all([
    page.waitForResponse(/\/status_codes\/200/),
    page.getByRole('link', { name: '200', exact: true }).click(),
  ])

  expect(response.status()).toBe(200)
  await expect(page).toHaveURL(/\/status_codes\/200/)
  await expect(page.getByRole('heading', { name: 'Status Codes', level: 3 })).toBeVisible();
  await expect(page.getByText('This page returned a 200 status code.')).toBeVisible();
})

test('opening status code 301 shows the 301 status code page', async ({ page }) => {
  await page.goto('/status_codes')

  const [response] = await Promise.all([
    page.waitForResponse(/\/status_codes\/301/),
    page.getByRole('link', { name: '301', exact: true }).click(),
  ])

  expect(response.status()).toBe(301)
  await expect(page).toHaveURL(/\/status_codes\/301/)
  await expect(page.getByRole('heading', { name: 'Status Codes', level: 3 })).toBeVisible();
  await expect(page.getByText('This page returned a 301 status code.')).toBeVisible();
})

test('opening status code 404 shows the 404 status code page', async ({ page }) => {
  await page.goto('/status_codes')

  const [response] = await Promise.all([
    page.waitForResponse(/\/status_codes\/404/),
    page.getByRole('link', { name: '404', exact: true }).click(),
  ])

  expect(response.status()).toBe(404)
  await expect(page).toHaveURL(/\/status_codes\/404/)
  await expect(page.getByRole('heading', { name: 'Status Codes', level: 3 })).toBeVisible();
  await expect(page.getByText('This page returned a 404 status code.')).toBeVisible();
})

test('opening status code 500 shows the 500 status code page', async ({ page }) => {
  await page.goto('/status_codes')

  const [response] = await Promise.all([
    page.waitForResponse(/\/status_codes\/500/),
    page.getByRole('link', { name: '500', exact: true }).click(),
  ])

  expect(response.status()).toBe(500)
  await expect(page).toHaveURL(/\/status_codes\/500/)
  await expect(page.getByRole('heading', { name: 'Status Codes', level: 3 })).toBeVisible();
  await expect(page.getByText('This page returned a 500 status code.')).toBeVisible();
})
