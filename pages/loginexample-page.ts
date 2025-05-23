import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly Usernameinput: Locator;
    readonly Passwordinput: Locator;
    readonly Loginbutton: Locator;
    readonly Logoutbutton: Locator;

constructor(page: Page) {
    this.page = page;
    this.Usernameinput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    this.Passwordinput = page.getByRole('textbox', { name: 'Password' });
    this.Loginbutton = page.getByRole('button', { name: 'Login' })
    this.Logoutbutton = page.getByRole('link', { name: ' Logout' })
  }
  async Gotologinpage() {
    await this.page.goto('https://automationexercise.com/login')
  }
  async LoginUserNameandPassword() {
    await this.Usernameinput.fill('TestPassword1234567@example.com')
    await this.Passwordinput.fill('password')
  }
  async LoginUsernameandPasswordIncorrect() {
    await this.Usernameinput.fill('Test@example.com')
    await this.Passwordinput.fill('password')
  }
  async ClickLoginButton() {
    await this.Loginbutton.click();
  }
  async DisplayLoginPage() {
    await expect(await this.page.getByText('Logged in as Test1234567')).toBeVisible();
  }
  async DeleteAccount() {
    await this.page.getByRole('link', { name: ' Delete Account' }).click();
  }
  async DisplayAccountDeleted() {
    await expect(await this.page.getByText('ACCOUNT DELETED!')).toBeVisible();
  }
  async DisplayLoginError() {
    await expect(await this.page.getByText('Your email or password is incorrect!')).toBeVisible();
  }
  async ClickLogout() {
    await this.Logoutbutton.click();
  }
}