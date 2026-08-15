import{test, expect, chromium, Page} from "@playwright/test"

test("handle popups", async({browser})=>{

//const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://testautomationpractice.blogspot.com/");

//Multiple popups 
/*
page.waitForEvent('popup');
await page.locator("#PopUp").click();
*/


await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()]);

const allpopupwindows = context.pages();  //Returns all pop up windows
//allpopupwindows.waitForTimeout(5000);
console.log("All pop up windows opened are",allpopupwindows.length);

//Return all window popups URL 

console.log(allpopupwindows[0].url());
console.log(allpopupwindows[1].url());
//console.log(allpopupwindows[2].url());

for (const pw of allpopupwindows){
    const title = await pw.title();
    if(title.includes('Playwright')){
            await pw.locator('.getStarted_Sjon').click();

            // perform any other action 

            await pw.close();
    }
}

})