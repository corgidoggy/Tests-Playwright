import { test, expect } from '@playwright/test';
import { LoginTTB } from '../pages/loginttb-page';

test('Verify Screen', async ({ page }) => {
    const loginTTB = new LoginTTB(page);
    await loginTTB.goto();
    await expect(page).toHaveTitle('Customer Verification Web');
    await expect(page.getByRole('img')).toBeVisible();
    await expect(page.getByText('FINOVA')).toBeVisible();
    await expect(page.getByText('ยินดีต้อนรับ')).toBeVisible();
    await expect(page.getByText('โปรดเข้าสู่ระบบเพื่อเข้าใช้งาน')).toBeVisible();
    await expect(page.getByPlaceholder('เลขประจำตัวประชาชน 13 หลัก')).toBeVisible();
    await expect(page.getByRole('combobox')).toBeVisible();
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).isDisabled();
});
test('Click DC Box', async ({ page }) => {
    const loginTTB = new LoginTTB(page);
    await loginTTB.goto();
    await page.getByRole('combobox').selectOption('DC');
    await expect(page.getByRole('combobox')).toHaveValue('DC');
});
test('Click FR (STAFF) Box', async ({ page }) => {
    const loginTTB = new LoginTTB(page);
    await loginTTB.goto();
    await page.getByRole('combobox').selectOption('FR_STAFF');
    await expect(page.getByRole('combobox')).toHaveValue('FR_STAFF');
});
test('Click FR (Customer) Box', async ({ page }) => {
    const loginTTB = new LoginTTB(page);
    await loginTTB.goto();
    await page.getByRole('combobox').selectOption('FR_CUSTOMER');
    await expect(page.getByRole('combobox')).toHaveValue('FR_CUSTOMER');
});
test('Fill ID Card', async ({ page }) => {
    const loginTTB = new LoginTTB(page);
    await loginTTB.goto();
    await loginTTB.login('1234567891111');
    await page.locator('button.submit-button').isEnabled();
    await expect(page.getByText('ยืนยันตัวตนด้วยบัตรประจำตัวประชาชน')).toBeVisible();
});

