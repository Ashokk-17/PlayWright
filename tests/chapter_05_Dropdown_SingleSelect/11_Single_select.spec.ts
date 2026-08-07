import {test, expect} from "@playwright/test"

test("verify single select dropdown", async ({page} ) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    
     await page.waitForTimeout(5000);
        // Select options from the drop down , 4 ways 


    // await page.locator("#country").selectOption("India");             //Select by visible text
    // await page.locator("#country").selectOption({value : "uk"});      //Select by value
    // await page.locator("#country").selectOption({index : 3});         //Select by index
    // await page.locator("#country").selectOption({label : "France"});     //Select by label


    //Check number of options in the dropdown (count)

    const total_options:number = await page.locator("#country>option").count();
    await expect(total_options).toBe(10);


    //check an option presernt in the dropdown or not

    const option_present:string[] = (await page.locator("#country>option").allTextContents()).map(text => text.trim());
    console.log(option_present);
    await expect(option_present).toContain("India");


    //printng all the options in the dropdown

    for ( const option of option_present){
        console.log(option);
    }






}
)