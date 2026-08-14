

//By default dialogs are auto dismissed by the playwright, so u dont have to handle them 
//However, you can rgeister the dialog handler before the action that triggers the
//dialog to either dialog.accept() or dialog.dismiss

//alerts() confirm() prompt() dialogs or JS alerts

import {test, expect} from '@playwright/test'

test("dialog program", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    //Enabling alert() handling  

    page.on("dialog", (dialog)=>{
        console.log("Dialog type is", dialog.type());    //returns the type of the dialog
        expect(dialog.type()).toContain('alert');
        console.log("dialog text is",dialog.message());  //returns the content of the dialog
        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();
    });

    const alertbutton = page.locator("button[id='alertBtn']");
    await alertbutton.click();

    await page.waitForTimeout(5000);







})