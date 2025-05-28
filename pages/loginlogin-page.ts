import { Page } from "@playwright/test";

export class LogininPage {
    baseUrl = 'https://www.saucedemo.com/';
    locatorUsername = '#user-name';
    locatorPassword = '#password';
    locatorLoginbutton = '[data-test="login-button"]';
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async Goto() {
    await this.page.goto(this.baseUrl);
    }
    async FillUserPassword(username, password) {
    await this.page.locator(this.locatorUsername).fill(username);
    await this.page.locator(this.locatorPassword).fill(password);
    }
    
    async Clicklogin() {
    await this.page.click(this.locatorLoginbutton);
    }

    async GetUsername() {
     return await this.page.locator(this.locatorUsername).inputValue();
    }
    async GetPassword() {
     return await this.page.locator(this.locatorPassword).inputValue();
    }
}