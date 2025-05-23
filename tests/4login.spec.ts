import {test , expect} from '@playwright/test';
import {LoginPage} from '../pages/login-page';

test('correct username and password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('Login successful');
});

test('wrongusername', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('wrong_user', 'secret_sauce');
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    console.log('login failed');
});

test('emptyusername', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('', '');
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    console.log('Empty username and password');
});