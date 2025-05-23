import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly requiredPasswordText: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByTestId('username-input');
    this.passwordInput = page.getByTestId('password-input');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.requiredPasswordText = page.getByText('Password is required');
    this.logoutButton = page.getByRole('button', { name: 'Log out' });
  }

  async gotoLoginPage() {
    await this.page.goto('https://workshop-playwright.vercel.app');
  }

  async displayLoginPage() {
    await expect(this.page.getByText("Welcome to ODDS")).toBeVisible();
  }

  async loginWithUsernameAndPassword() {
    await this.userNameInput.fill('john');
    await this.passwordInput.fill('doe');
    await this.loginButton.click();
  }

  async loginWithOnlyUsername() {
    await this.userNameInput.fill('john');
    await this.loginButton.click();
  }

  async displayErrorMissingPassword() {
    await expect(this.page.getByText("Password is Required")).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
//*
