import {Page} from '@playwright/test';

export class AddToCartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }
  async addtocart() {
    await this.page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
  }
  async addtocart2() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }
  async removefromcart() {
    await this.page.click('#remove-sauce-labs-backpack');
  }
}
