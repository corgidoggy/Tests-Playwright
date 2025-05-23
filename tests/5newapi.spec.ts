import { test, expect } from "@playwright/test";

test("Get All Product List", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/productsList"
  );

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);

  console.log("✅ Get All Product List Pass");
});
test("Post To All Product List", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/productsList",
    {
      data: {
        name: "Test Product",
        price: "100",
        brand: "Test Brand",
        category: "Test Category",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("Get All Brands List", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/brandsList"
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("Put To All Brand List", async ({ request }) => {
  const response = await request.put(
    "https://automationexercise.com/api/brandsList",
    {
      data: {
        name: "Updated Brand",
        id: 1,
        category: "Updated Categoty",
        brand: "Updated Brand",
        price: "250",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("Search Product", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/searchProduct",
    {
      form: {
        search_product: "T-Shirt",
      },
    }
  );

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("POST To Search Product without search_product parameter", async ({
  request,
}) => {
  const response = await request.post(
    "https://automationexercise.com/api/searchProduct",
    {
      form: {},
    }
  );
  const status = response.status();
  const responseBody = await response.json();
  console.log(typeof status);
  console.log(status);
  console.log(responseBody);
  expect(status).toBe(200);
});
test("POST To Verify Login with valid details", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/verifyLogin",
    {
      form: {
        email: "Test User@example.com",
        password: "TestPassword123",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("POST To Verify Login without email parameter", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/verifyLogin",
    {
      form: {
        password: "your_password",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("DELETE To Verify Login", async ({ request }) => {
  const response = await request.delete(
    "https://automationexercise.com/api/verifyLogin"
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("POST To Verify Login with invalid details", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/verifyLogin",
    {
      form: {
        email: "your_email@example.com",
        password: "your_password",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("POST To Create/Register User Account", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/createAccount",
    {
      form: {
        name: "Test User",
        email: "Test User@example.com",
        password: "TestPassword123",
        title: "Mr",
        birth_date: "1990-01-01",
        birth_month: "January",
        birth_year: "1990",
        firstname: "Test",
        lastname: "User",
        company: "Test Company",
        address1: "123 test street",
        address2: "Apt 4B",
        country: "United States",
        zipcode: "12345",
        state: "New York",
        city: "New York",
        mobile_number: "1234567890",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("DELETE METHOD To Delete User Account", async ({ request }) => {
  const response = await request.delete(
    "https://automationexercise.com/api/deleteAccount",
    {
      form: {
        email: "Test User@example.com",
        password: "TestPassword123",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("PUT METHOD To Update User Account", async ({ request }) => {
  const response = await request.put(
    "https://automationexercise.com/api/updateAccount",
    {
      form: {
        name: "Test User",
        email: "Test User@example.com",
        password: "TestPassword123",
        title: "Mr",
        birth_date: "1990-01-01",
        birth_month: "January",
        birth_year: "1990",
        firstname: "Test",
        lastname: "User",
        company: "Test Company",
        address1: "123 test street",
        address2: "Apt 4B",
        country: "United States",
        zipcode: "12345",
        state: "Bangkok",
        city: "Bangkok",
        mobile_number: "1234567890",
      },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
test("GET user account detail by email", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/getUserDetailByEmail?email=Test User@example.com"
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
