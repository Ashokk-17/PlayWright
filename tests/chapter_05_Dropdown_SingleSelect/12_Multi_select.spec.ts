import {test, expect} from '@playwright/test';

test("multiselect dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select options from the drop down has 4 ways to select options

    // await page.locator("#colors").selectOption(["Red", "Green"]); //Select by visible text
    // await page.locator("#colors").selectOption([{value: "yellow"}, {value: "purple"}]); //Select by value attribute
    // await page.locator("#colors").selectOption([{index: 0}, {index: 1}]); //Select by index
    // await page.locator("#colors").selectOption([{label: "Blue"}, {label: "Purple"}]); //Select by label

    //Check number of options in the dropdown (count)

    const total_options :number = await page.locator("#colors > option").count();
    expect(total_options).toBe(7);

    //check an option present in the dropdown or not
    const option_present : string[] =((await page.locator("#colors > option").allTextContents()).map(text=> text.trim()));
    console.log(option_present);
    await expect(option_present).toContain("Red");


        //printing all the options in the dropdown
    for (const option of option_present){
        console.log(option);
    }


    //Unselecting the options from the dropdown
    for (const option of option_present){
        console.log(option);
        await page.locator("#colors").selectOption({label: option});
    }























})