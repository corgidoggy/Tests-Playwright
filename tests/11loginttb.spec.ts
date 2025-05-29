import { test, expect } from '@playwright/test';
import { LoginTTB } from '../pages/loginttb-page';

test('Verify Screen', async ({ page }) => {
    const loginTTB = new LoginTTB(page);
    await loginTTB.goto();
    await expect(page.getByRole('img')).toBeVisible();
    await expect(page.getByText('FINOVA')).toBeVisible();
    await expect(page.getByText('ยินดีต้อนรับ')).toBeVisible();
    await expect(page.getByText('โปรดเข้าสู่ระบบเพื่อเข้าใช้งาน')).toBeVisible();
    await expect(page.getByPlaceholder('เลขประจำตัวประชาชน 13 หลัก')).toBeVisible();
    await expect(page.getByRole('combobox')).toBeVisible();
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).isDisabled();
    
})