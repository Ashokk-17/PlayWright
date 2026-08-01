import {test, expect, Locator} from '@playwright/test';

test("ip", async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox:Locator = page.locator("#name");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();

    const maxlength: String | null = await textbox.getAttribute("maxlength");
    console.log("Max length of the textbox is : "+maxlength);
     
    expect(maxlength).toBe("15");

    await textbox.fill("Test Automation Practice");
    console.log("Text entered in the textbox is : "+await textbox.inputValue());







}
)