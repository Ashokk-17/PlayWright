import {test, expect, Locator} from '@playwright/test'

test("Jquery Date picker", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");


//Date picker to be visible 

const datepicker: Locator = page.locator("#datepicker");
await expect(datepicker).toBeVisible();




//Approach 1 === Using fill method

// datepicker.fill("05/04/2026");
// await page.waitForTimeout(2000);



//Aproach 2 === Using date picker 

await datepicker.click(); //opens the date picker

//First select the target date 

const date ='29';
const month = 'August';
const year = '2026';

while(true){

    const currentMonth = await page.locator(".ui-datepicker-month").innerText();
    const currentYear = await page.locator(".ui-datepicker-year").innerText();

    if(currentMonth === month && currentYear === year){
        break;
    }

    await page.locator("ui-datepicker-next").click(); //For select future date

} //till here we compare year and month, now we should select date

const alldates = await page.locator(".ui-datepicker-calendar td").all();

for (let dt of alldates){

    const datetext = await dt.innerText();

    if(datetext === date){
        await dt.click();
        break;
    }


}
await page.waitForTimeout(10000);


}



)