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
  await page.getByRole('link', { name: 'Aircraft Type/Series' }).click();
  await page.getByRole('menuitem', { name: 'New' }).click();
  await page.locator('input[name="mainForm:mainTabView:dwsTabViewoux_ac_type_series_eu_e73b7fee8ab84910ab9ecfde3d9ed92f:j_idt56041"]').click();
  await page.locator('input[name="mainForm:mainTabView:dwsTabViewoux_ac_type_series_eu_e73b7fee8ab84910ab9ecfde3d9ed92f:j_idt56041"]').fill('nvs');
  await page.locator('input[name="mainForm:mainTabView:dwsTabViewoux_ac_type_series_eu_e73b7fee8ab84910ab9ecfde3d9ed92f:j_idt56057"]').click();
  await page.locator('input[name="mainForm:mainTabView:dwsTabViewoux_ac_type_series_eu_e73b7fee8ab84910ab9ecfde3d9ed92f:j_idt56057"]').fill('10');
  await page.locator('input[name="mainForm:mainTabView:dwsTabViewoux_ac_type_series_eu_e73b7fee8ab84910ab9ecfde3d9ed92f:j_idt56078"]').click();
  await page.locator('input[name="mainForm:mainTabView:dwsTabViewoux_ac_type_series_eu_e73b7fee8ab84910ab9ecfde3d9ed92f:j_idt56078"]').fill('navas type and series');
  await page.getByRole('menuitem', { name: 'Save' }).click();
  await expect(page.getByRole('tabpanel', { name: 'A/C Type/Series' }).getByText('Data was saved successfully!')).toBeVisible();
});