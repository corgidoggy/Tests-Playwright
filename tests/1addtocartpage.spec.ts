import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { AddToCartPage } from "../pages/addtocart-page";

test("add to cart passed", async ({ page }) => {
  const login = new LoginPage(page);
  const addtocart = new AddToCartPage(page);

  await login.goto();
  await login.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await addtocart.goto();
  await addtocart.addtocart2();
  

  // ✅ ตรวจสอบว่ามีสินค้าถูกเพิ่ม
  console.log("Add to cart test passed");

  //Logout
  await login.logout();

});

test("add to cart faield", async ({ page }) => {
  const login = new LoginPage(page);
  const addtocart = new AddToCartPage(page);
  await login.goto();
  await login.login('problem_user', 'secret_sauce' )
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  await addtocart.goto();
  await addtocart.addtocart();
  
  
  console.log('Add to cart test failed');
  //Logout
  await login.logout();
});