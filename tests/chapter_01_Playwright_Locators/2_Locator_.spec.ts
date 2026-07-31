
import {test, expect, Locator} from "@playwright/test"

test("Different types of locator", async ({page})=> {
 
    await page.goto("https://demo.nopcommerce.com");


    // Get by Alt text

    const image:Locator = page.getByAltText("nopCommerce demo store");
    
    await expect(image).toBeVisible();

await image.click();



//gettByText();
await expect(page.getByText("Welcome to our store")).toBeVisible(); //full string

await expect(page.getByText("Welcome to")).toBeVisible();  //partial string or sub string

await expect(page.getByText("/welcome\s to\s our\s store/i ")).toBeVisible();  //Regular expression where i ignores upper/lower case matching


//getByRole();
await page.getByRole("link",{name : 'Register'}).click();

//getByLabel();

await page.getByLabel("First Name :").fill("John");
await page.getByLabel("Last name :").fill("Cena");
await page.getByLabel("Email :").fill("Ashk");


//getByPlaceholder();
await page.getByPlaceholder("Search Store").fill("Apple macbook pro");

//getByTitle();
await expect(page.getByTitle("Home Page Link")).toHaveText("Home");

//getByTestId();

await expect(page.getByTestId("profile-textid")).toHaveText("hello");



}
)