import { Page } from '@playwright/test';
import { th } from '../lang/th';

export async function login(page: Page, url: string, employeeCode: string) {
  await page.goto(url);
  await page.getByRole('textbox', { name: th.employeeCode }).fill(employeeCode);
  await page.getByRole('button', { name: th.login }).click();
}
