import { test, expect } from '@playwright/test';

test('Get all prloducts list', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/productsList');
  const data = await response.json();
  console.log(data);
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
}); 