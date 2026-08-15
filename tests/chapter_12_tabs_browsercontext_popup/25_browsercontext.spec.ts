

//Browser ---->  context -----> pages

//Browser = chrome , firefox, webkit

//context = we can have multiple users or apps  the same browser
//it provides a way to operate the multiple independent browser sessions

//pages = Tab, Window,Popup

import { test, expect, Page, chromium, firefox, webkit} from "@playwright/test";

test("Browser context demo", async ()=>{

    const browser = await chromium.launch();   //create a browser

    const context = await browser.newContext(); //create a context

    //Creating 2 new pages in the same browser 

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    console.log("number of pages created",context.pages().length);

    await page1.goto("https://github.com/Ashokk-17");
    await page2.goto("https://www.linkedin.com/feed/");
    

    await expect(page1).toHaveTitle(/Ashokk-17/);
    await expect(page2).toHaveTitle(/LinkedIn/);


})