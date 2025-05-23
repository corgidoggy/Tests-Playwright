import { Page } from "@playwright/test";

export class SingupPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://automationexercise.com/login");
  }
  async login(username: string, email: string) {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(username);
    await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
    await this.page.click('button[type="submit"]');
  }
  async Signup() {
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }
  async Adddetails() {
    await this.page.getByRole('radio', { name: 'Mrs.' }).click();
    await this.page.getByRole('textbox', { name: 'Password *' }).fill('password');
    await this.page.locator('#days').selectOption('3');
    await this.page.locator('#months').selectOption('July');
    await this.page.locator('#years').selectOption('1995');
    await this.page.getByRole('textbox', { name: 'First name *' }).fill('Test');
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill('User');
    await this.page.getByRole('textbox', { name: 'Company', exact: true }).fill('Test Company');
    await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Test Address');
    await this.page.getByRole('textbox', { name: 'Address 2' }).fill('Test Address 2');
    await this.page.getByLabel('Country *').selectOption('United States');
    await this.page.getByRole('textbox', { name: 'State *' }).fill('Test State');
    await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('test City');
    await this.page.locator('#zipcode').fill('123456');
    await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill('01234567890');
    await this.page.getByRole('button', { name: 'Create Account' }).click();
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}
