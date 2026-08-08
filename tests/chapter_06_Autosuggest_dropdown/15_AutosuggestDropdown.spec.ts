import {test, expect} from "@playwright/test"

test("autosuggest dropdown",async({page}) => {
    await page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']:not([readonly])").fill("smart");

    await page.waitForTimeout(5000);

    //Get all suggested options ctrl+shift+P or emulate focused page

    const options: Locator = page.locator("ul>ui");
    const count = await options.count();
    console.log("Total number of suggested options are : ", count);
    await page.waitForTimeout(5000);

    //printing all suggested option in the console 

    console.log(" 5th option is : ", await options.nth(4).textContent()); //you can use inner text also instead of textContent
     for (let i=0; i<count; i++) {
        console.log(await options.nth(i).textContent());
     }

     //select or click on the smart phone option from the suggested options

     for (let i=0; i<count; i++) {
        const text = await options.nth(i).innerText();
        if (text === "smart phone") {
            await options.nth(i).click();
            break;
        }
    }








})