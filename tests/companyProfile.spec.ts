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
  await page.getByRole('link', { name: 'Company Profile' }).click();
  await page.getByRole('menuitem', { name: 'New' }).click();
  await page.locator('[id="mainForm:mainTabView:dwsTabViewoux_company_profile_eu_ca229dfcbf214e34ad22314889535147:j_idt67161"]').click();
  await page.locator('[id="mainForm:mainTabView:dwsTabViewoux_company_profile_eu_ca229dfcbf214e34ad22314889535147:j_idt67161"]').fill('kkd');
  await page.locator('[id="mainForm:mainTabView:dwsTabViewoux_company_profile_eu_ca229dfcbf214e34ad22314889535147:j_idt67186"]').click();
  await page.locator('[id="mainForm:mainTabView:dwsTabViewoux_company_profile_eu_ca229dfcbf214e34ad22314889535147:j_idt67186"]').fill('chnkkd');
  await page.locator('[id="mainForm:mainTabView:dwsTabViewoux_company_profile_eu_ca229dfcbf214e34ad22314889535147:j_idt67275"]').click();
  await page.locator('[id="mainForm:mainTabView:dwsTabViewoux_company_profile_eu_ca229dfcbf214e34ad22314889535147:j_idt67275"]').fill('aed');
  await page.getByRole('menuitem', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Currency' }).click();
  await page.locator('button[name="mainForm:dw_system_tran_code_dds_dbeef5716c0f4072b357cd3a7596013d:1:j_idt28736"]').click();
  await page.getByRole('menuitem', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Currency' }).click();
  await page.locator('button[name="mainForm:dw_system_tran_code_dds_4d2c5475ce734cd4aa39aaa2b1aece9f:5:j_idt28736"]').click();
  await page.getByRole('menuitem', { name: 'Save' }).click();
});