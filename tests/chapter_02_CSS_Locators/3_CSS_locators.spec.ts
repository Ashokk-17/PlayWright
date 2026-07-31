import {test,expect,Locator} from "playwright/test"

test("verify the CSS selector", async ({page})=>{


await page.goto("https://demowebshop.tricentis.com/");

//tag name with ID

// await page.locator("input#small-searchterms").fill("macbook pro");
// await page.waitForTimeout(5000);


//tag name with class

// await page.locator("input.search-box-text").fill("macbook pro");
// await page.waitForTimeout(5000);

//tagname with other attribute

// await page.locator("input[value='Search store']").fill("macbook pro");
// await page.waitForTimeout(5000);


//tagname witj class and attribute

await page.locator("input.search-box-text[value='Search store']").fill("macbook pro");
await page.waitForTimeout(5000);






















}
)