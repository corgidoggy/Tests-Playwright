import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginexample-page';

test.describe('Login Tests', () => {
test('Login User with correct email and password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.Gotologinpage();
    await login.LoginUserNameandPassword();
    await login.ClickLoginButton();
    await login.DisplayLoginPage();
    console.log('Login Sucessful')
});
test('Login User with incorrect email and password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.Gotologinpage();
    await login.LoginUsernameandPasswordIncorrect();
    await login.ClickLoginButton();
    await login.DisplayLoginError();
    console.log('Login failed as expected')
})
test('Logout User', async ({ page }) => {
    const login = new LoginPage(page);
    await login.Gotologinpage();
    await login.LoginUserNameandPassword();
    await login.ClickLoginButton();
    await login.ClickLogout();
    console.log('Logout Successful')
})
});