import { test, expect } from '@playwright/test';
import { th } from '../lang/th';
import { login } from '../helper/login-page';

test.describe('Test Web', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'https://finova-gateway-sit.ttbbank.local/auth/', '123456789');
  });

  test('Test Fill Data', async ({ page }) => {
    await expect(page.getByRole('heading', { name: th.welcome })).toBeVisible();
  });

  test('ถอนเงิน', async ({ page }) => {
    await expect(page.getByText('นายธนชาติ ตั้งใจมั่น')).toBeVisible();
    await page.getByRole('article').first().click();
    await page.locator('div').filter({ hasText: /^ถอน$/ }).nth(4).click();
    await page.getByRole('textbox', { name: th.enterWithdrawalCode }).fill('1234');
    await page.getByRole('button', { name: th.confirm }).click();
  });
});
