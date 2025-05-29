import { Page } from '@playwright/test';

export class LoginTTB {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://cvw-sit.ttbbank.local/demo/login');
    }
    async login(username: string) {
        await this.page.fill("input[placeholder='เลขประจำตัวประชาชน 13 หลัก']", username);
        await this.page.getByRole('combobox').selectOption('DC');
        await this.page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    }
    
}
