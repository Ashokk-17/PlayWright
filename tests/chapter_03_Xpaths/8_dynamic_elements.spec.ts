import { test, expect, Locator } from "@playwright/test";



/*
// Using Xpath to locate dynamic elements on the page


test("Verify the dynamic", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

 await page.waitForTimeout(5000);

//loop to click the button 5 times

for (let i=1; i<=5; i++){

let button:Locator = page.locator("(//button[@name='start' or @name='stop'])");
await button.click();

await page.waitForTimeout(2000);

}

});
*/


/*
//Using CSS selectors to locate dynamic elements on the page

test("Verify the dynamic", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

 await page.waitForTimeout(5000);

//loop to click the button 5 times

for (let i=1; i<=5; i++){

let button:Locator = page.locator("button[name='start'], button[name='stop']");
await button.click();

await page.waitForTimeout(2000);

}

});
*/


//Using Playwright locators to locate dynamic elements on the page

test("Verify the dynamic", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(5000);

//loop to click the button 5 times

for (let i=1; i<=5; i++){

let button:Locator = page.getByRole('button', { name: /start|stop/i });
await button.click();

await page.waitForTimeout(2000);

}

});