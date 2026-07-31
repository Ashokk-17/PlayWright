import { test, expect, Locator } from "@playwright/test";

test("Verify the xpath", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page.locator("xpath=//img[@alt='Tricentis Demo Web Shop']")).toBeVisible();

}
)