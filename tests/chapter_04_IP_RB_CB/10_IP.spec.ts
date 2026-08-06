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

    await expect(textbox).toHaveValue("Test Automation Pr");
    await page.waitForTimeout(3000);
}
)

//radio button
    test.only("radio button", async ({page})=>{  
        await page.goto("https://testautomationpractice.blogspot.com/");

        const radioButton:Locator = page.locator("#male");  

        await expect(radioButton).toBeVisible();
        await expect(radioButton).toBeEnabled();

        await radioButton.check();
        console.log("Radio button is checked : "+await radioButton.isChecked());   

        await expect(radioButton).toBeChecked();
        await page.waitForTimeout(3000);

}
)


// check box

test.only("check box", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. selecting the checkbox using label and asserting the checkbox is checked or not
    const sundaycheckBox:Locator = page.getByLabel("Sunday");   
    await   expect(sundaycheckBox).toBeVisible();
    await   expect(sundaycheckBox).toBeEnabled();

    await sundaycheckBox.check();
    await expect(sundaycheckBox).toBeChecked();


    //2. selecting all the checkbox and assert each is checked 

    const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const checkboxes: Locator[] = days.map(day => page.getByLabel(day));
    expect(checkboxes.length).toBe(6);

    // 3. check each checkbox and assert it is checked
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    // 4. uncheck each checkbox and assert it is unchecked

    for (const checkbox of checkboxes.slice(3)) { // uncheck Thursday, Friday, Saturday
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    
    await page.waitForTimeout(3000);

    // 5. Toggle check box, if checked then uncheck and assert it is unchecked, if unchecked then check and assert it is checked
    for (const checkbox of checkboxes) {
        
        if(await checkbox.isChecked()){   //if checkbox is checked then uncheck it and assert it is unchecked
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else{
            await checkbox.check(); // if checkbox is unchecked then check it and assert it is checked
            await expect(checkbox).toBeChecked();
        }


        // 6. randomly select a checkbox and assert it is checked and select check box by indec 1,3,6 and assert

        const indexes: number[] = [1, 3, 6];
        for (const index of indexes) {
            const checkbox: Locator = checkboxes[index];
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }

        // 7. select the checkbox based on the label 

        const weekname = "Wednesday";

        for (const label of checkboxes) {
            if (label.toLowerCase() === weekname.toLowerCase()) {
                await label.check();
                await expect(label).toBeChecked();
                break;
            }
        }
    }   

        
        











}
)   