import { test, expect } from '@playwright/test';
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
test("Add Products in Cart", async ({ page }) => {
  // เข้าเว็บ
  await page.goto("http://automationexercise.com/products");
  await page.waitForLoadState("networkidle");

  // เพิ่มสินค้าชิ้นที่ 1
  await page.locator(".productinfo").nth(0).locator("text=Add to cart").click();
  await page.getByRole("button", { name: "Continue Shopping" }).click();

  // เพิ่มสินค้าชิ้นที่ 2
  await page.locator(".productinfo").nth(1).locator("text=Add to cart").click();
  await page.getByRole("button", { name: "Continue Shopping" }).click();

  // เพิ่มสินค้าชิ้นที่ 3
  await page.locator(".productinfo").nth(2).locator("text=Add to cart").click();

  // เข้าไปดูตะกร้า
  await page.getByRole("link", { name: "View Cart" }).click();

  // ตรวจสอบจำนวนสินค้าที่อยู่ในตะกร้า
  const cartItems = page.locator(".cart_info tbody tr");
  await expect(cartItems).toHaveCount(3);
});


test('Add review on product', async ({ page }) => {
  // 1-2. Launch browser + Navigate to URL
  await page.goto('http://automationexercise.com');
  await page.waitForLoadState('networkidle');

  // 3. Click on 'Products' button
  await page.getByRole('link', { name: ' Products' }).click();

  // 4. Verify ALL PRODUCTS page loaded
  await expect(page.locator('h2:has-text("All Products")')).toBeVisible();

  // 5. Click on 'View Product' (สมมุติกดตัวแรก)
  await page.locator('.choose > .nav > li > a').first().click();

  // 6. Verify 'Write Your Review' is visible
  await expect(page.getByRole('link', { name: 'Write Your Review' })).toBeVisible();

  // 7. Enter name, email, and review
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Test User');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('Test1234567@example.com');
  await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('this is a test revire');

  // 8. Click 'Submit' button
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  // 9. Verify success message
  await expect(page.getByText(("Thank you for your review."))).toBeVisible();
});

test('Download invoice after purchase order', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveTitle('Automation Exercise');
  await page.waitForLoadState('networkidle');
  await page.locator(".productinfo").nth(0).locator("text=Add to cart").click();
  await page.getByRole("link", { name: "View Cart" }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Register / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('TestPassword1234567@example.com');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Password').fill('password');
  await page.locator("button[data-qa='login-button']").click();
  await expect(page.getByText('Logged in as Test1234567')).toBeVisible();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.locator('.btn.btn-default.check_out').click();
  await expect(page.getByText('Address Details')).toBeVisible();
  await page.locator("textarea[name='message']").fill('Hi');
  await page.locator('.btn.btn-default.check_out').click();
  await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
  await page.locator("input[name='name_on_card']").fill('Test User');
  await page.locator("input[name='card_number']").fill('123456789');
  await page.locator("input[placeholder='ex. 311']").fill('311');
  await page.locator("input[placeholder='MM']").fill('01');
  await page.locator("input[placeholder='YYYY']").fill('2025');
  await page.locator('#submit').click();
  await expect(page.getByText('Order Placed!')).toBeVisible();
  await page.locator('.btn.btn-default.check_out').click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
});
test("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async ({ page }) => {
    await page.goto ('http://automationexercise.com');
    await page.waitForLoadState('networkidle');
    await page.getByRole('textbox', { name: 'Your email address' }).click();;
    await page.locator('#susbscribe_email').fill('Test123456@example.com');
    await page.locator('.fa.fa-arrow-circle-o-right').click();
    await page.getByRole('heading', { name: 'Full-Fledged practice website' }).click();
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
});
});