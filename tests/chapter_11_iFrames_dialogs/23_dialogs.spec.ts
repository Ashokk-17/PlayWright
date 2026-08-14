

//By default dialogs are auto dismissed by the playwright, so u dont have to handle them 
//However, you can rgeister the dialog handler before the action that triggers the
//dialog to either dialog.accept() or dialog.dismiss

//alerts() confirm() prompt() dialogs or JS alerts

import {test, expect, Page} from '@playwright/test'

test("Alert program", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    //Enabling alert() handling or dialog handling 

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


    //Confirmation dialog or alert

    test("Confirm program",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    //Register a dialog handler 

    page.on("dialog", (dialog)=>{
        console.log("Dialog type is", dialog.type());    //returns the type of the dialog
        expect(dialog.type()).toContain('confirm');
        console.log("dialog text is",dialog.message());  //returns the content of the dialog
        expect(dialog.message()).toContain('Press a button!');
        //dialog.accept();   //To accept the dialog
        dialog.dismiss(); // To dismiss the dialog, always do validation outside the dialogs
    });

    const confirmbutton = page.locator("button[id='confirmBtn']");
    await confirmbutton.click();

    await expect(page.locator("#demo")).toHaveText('You pressed Cancel!');
    

    await page.waitForTimeout(5000);





})

//Validating by adding text message inside the alert (prompt message dialog)

    test("Prmpt program",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    //Register a dialog handler 

    page.on("dialog", (dialog)=>{
        console.log("Dialog type is", dialog.type());    //returns the type of the dialog
        expect(dialog.type()).toContain('prompt');
        console.log("dialog text is",dialog.message());  //returns the content of the dialog
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        dialog.accept('Ashok');   //To accept the dialog
        //dialog.dismiss(); // To dismiss the dialog, always do validation outside the dialogs
    });

    const Promptbutton = page.locator("button[id='promptBtn']");
    await Promptbutton.click();

    await expect(page.locator("#demo")).toHaveText('Hello Ashok! How are you today?');
    

    await page.waitForTimeout(5000);





})