import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-emrov8.trax.aero/emro/');
  await page.getByText('I agree, continue browsing', { exact: true }).click();
  await page.locator('input[name="mainForm:j_idt34"]').click();
  await page.locator('input[name="mainForm:j_idt34"]').fill('adm');
  await page.locator('input[name="mainForm:j_idt68"]').click();
  await page.locator('input[name="mainForm:j_idt68"]').fill('trax');
  await page.getByRole('button', { name: 'Submit' }).click();
});