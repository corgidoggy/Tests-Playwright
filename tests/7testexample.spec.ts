import { test } from "@playwright/test";
import { LoginPage } from "../pages/tests-page";

test("login sucessful", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginWithUsernameAndPassword();
    await login.displayLoginPage();
    await login.logout();
});
test("login with missing password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginWithOnlyUsername();
    await login.displayErrorMissingPassword();
})