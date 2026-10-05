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
  await page.getByRole('link', { name: 'Location' }).click();
  await page.getByRole('menuitem', { name: 'New' }).click();
  await page.locator('input[name="mainForm:mainTabView:j_idt163641"]').click();
  await page.locator('input[name="mainForm:mainTabView:j_idt163641"]').fill('lkj');
  await page.locator('input[name="mainForm:mainTabView:j_idt163651:j_idt163665"]').click();
  await page.locator('input[name="mainForm:mainTabView:j_idt163651:j_idt163665"]').fill('lkjhgffg');
  await page.locator('input[name="mainForm:mainTabView:j_idt163651:j_idt163740"]').click();
  await page.locator('input[name="mainForm:mainTabView:j_idt163651:j_idt163740"]').fill('ddb');
  await page.locator('.ui-chkbox-box').first().click();
  await page.locator('.ui-chkbox-box.ui-widget.ui-state-default.ui-state-hover').click();
  await page.getByRole('menuitem', { name: 'Save' }).click();
  await expect(page.getByRole('tabpanel', { name: 'Location Master' }).getByText('Data was saved successfully!')).toBeVisible();
});