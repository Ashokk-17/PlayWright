
import {test, expect, Locator} from "@playwright/test"

test("Different types of locator", async ({page})=> {
 
    await page.goto("https://demo.nopcommerce.com");

    const image:Locator = page.getByAltText("nopCommerce demo store");
    
    await expect(image).toBeVisible();

await image.click();


await expect(page.getByText("Welcome to our store")).toBeVisible();
}
)