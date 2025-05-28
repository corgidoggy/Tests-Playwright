import { test, expect } from '@playwright/test';
import { LogininPage } from '../pages/loginlogin-page';

test.beforeEach(async ({ page }) => {
    const loginpage = new LogininPage(page);
    await loginpage.Goto();
});

test('input fields should display as the data that was filled', async ({ page }) => {
    const loginpage = new LogininPage(page);
    await loginpage.FillUserPassword('testuser', 'password');
    expect(await loginpage.GetUsername()).toBe('testuser');
    expect(await loginpage.GetPassword()).toBe('password');
});
test('Should show an error message if login without a username', async ({ page }) => {
    const loginpage = new LogininPage(page);
    await loginpage.FillUserPassword('', 'password');
    expect(await loginpage.GetUsername()).toBe('testuser');
    expect(await loginpage.GetPassword()).toBe('password');
});
