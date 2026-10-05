import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-emrov8.trax.aero/emro/');
  await page.getByText('I agree, continue browsing', { exact: true }).click();
  await page.locator('input[name="mainForm:j_idt34"]').click();
  await page.locator('input[name="mainForm:j_idt34"]').fill('adm');
  await page.locator('input[name="mainForm:j_idt68"]').click();
  await page.locator('input[name="mainForm:j_idt68"]').fill('trax');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Modules ' }).click();
  await page.getByRole('link', { name: 'Settings ' }).click();
  await page.getByRole('link', { name: 'UPDATE ' }).click();
  await page.getByRole('link', { name: 'Customer', exact: true }).click();
  await page.getByRole('menuitem', { name: 'New' }).click();
  await page.locator('input[name="mainForm:mainTabView:j_idt162079:j_idt162093"]').click();
  await page.locator('input[name="mainForm:mainTabView:j_idt162079:j_idt162093"]').fill('trew');
  await page.getByRole('link', { name: 'Category' }).click();
  await page.locator('button[name="mainForm:dw_system_tran_code_dds_40d2e2612b6f4e358df6b522869dea85:0:j_idt10297"]').click();
  await page.locator('input[name="mainForm:mainTabView:j_idt162079:j_idt162148"]').click();
  await page.locator('input[name="mainForm:mainTabView:j_idt162079:j_idt162148"]').fill('asdf');
  await page.getByRole('menuitem', { name: 'Save' }).click();
  await expect(page.getByRole('tabpanel', { name: 'Customer Master' }).getByText('Data was saved successfully!')).toBeVisible();
});