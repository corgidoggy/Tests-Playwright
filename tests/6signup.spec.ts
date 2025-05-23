import { test , expect } from "@playwright/test";
import { SingupPage } from "../pages/signup-page";

test("ผู้ใช้สามารถสมัครบัญชีได้", async ({ page }) => {
    const login = new SingupPage (page);
    await login.goto();
    await login.login('Test1234567', 'TestPassword1234567@example.com');
    await login.Signup();
    await login.Adddetails();
    await expect(page).toHaveTitle('Automation Exercise');
    console.log('Signup successful');
});
test ('Register User with existing email', async ({ page }) => {
    const login = new SingupPage (page);
    await login.goto();
    await login.login('Test1234567', 'TestPassword1234567@example.com');
    await login.Signup();
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
    console.log('Email already exist');
});