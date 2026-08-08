import {test, expect} from "@playwright/test"

test("autosuggest dropdown",async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Login
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    //click on PIM module
    await page.locator("a[href='/web/index.php/pim/viewPimModule']").click();

    //Click on Job title module
    await page.locator("a[href='/web/index.php/admin/viewJobTitle']").click();

    //capture all the options from the dropdown and count
    const options = page.locator("div[class='oxd-select-text oxd-select-text--active']>div>span");
    const count = await options.count();
    console.log("Total number of suggested options are : ", count);
    await page.waitForTimeout(5000);

    //printing all suggested option in the console
    for (let i=0; i<count; i++) {
        console.log(await options.nth(i).textContent());
     }

     //select or click on the option from the suggested options

     for (let i=0; i<count; i++) {
        const text = await options.nth(i).innerText();
        if (text === "Software Engineer") {
            await options.nth(i).click();
            break;
        }
    }

})

