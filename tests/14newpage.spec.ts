import { test, expect } from '@playwright/test';

test('Open New Page and check Redeemable Rewards', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://cccentricandbzbwebsitefortest.on.drv.tw/login%20BZB/%5BPuinoon%5D%20BZB_13Feb2024.html');
  await page.getByRole('textbox', { name: 'REF_ID' }).fill('P00000022400930');
  await page.locator('#lang').selectOption('EN');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Login UAT' }).click()
  ]);
  await newPage.waitForLoadState();
  const section = newPage.locator('text=Redeemable Rewards');
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible();
  await newPage.locator('div:nth-child(3) > .bg-white > .d-flex > .txt-color-second').click();
  await expect(newPage).toHaveURL('https://stg-web-tmbwowoneapp.azurewebsites.net/reward/category/has-point');
});
