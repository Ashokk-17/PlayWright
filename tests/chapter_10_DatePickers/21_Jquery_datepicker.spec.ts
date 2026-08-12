/*import {test, expect, Locator} from '@playwright/test'

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
*/

/*
import {test, expect, Locator, Page} from '@playwright/test'

test("Jquery Date picker", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");


async function selectDate(targetYear: string, targetMonth: string, targDate : string, page: Page, isFuture: boolean)
{
    while(true){

    const currentMonth = await page.locator(".ui-datepicker-month").innerText();
    const currentYear = await page.locator(".ui-datepicker-year").innerText();

    if(currentMonth === targetMonth && currentYear === targetYear){
        break;
    }

    if(isFuture){

        await page.locator(".ui-datepicker-next").click(); //For select future date

    }
    else{
        await page.locator(".ui-datepicker-prev").click(); //For select past date
    }


} //till here we compare year and month, now we should select date

const alldates = await page.locator(".ui-datepicker-calendar td").all();

for (let dt of alldates){

    const datetext = await dt.innerText();

    if(datetext === targDate){
        await dt.click();
        break;
    }


}


//Date picker to be visible 

const datepicker: Locator = page.locator("#datepicker");
await expect(datepicker).toBeVisible();




//Approach 1 === Using fill method

// datepicker.fill("05/04/2026");
// await page.waitForTimeout(2000);


//First select the target date 

const date ='29';
const month = 'August';
const year = '2026'; 


await selectDate(year,month,date,page,true);

const expectedDate = '08/29/2026';
await expect(datepicker).toHaveValue(expectedDate);

});

*/


import { test, expect, Locator, Page } from '@playwright/test';

test("Jquery Date picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    async function selectDate(
        targetYear: string,
        targetMonth: string,
        targDate: string,
        page: Page,
        isFuture: boolean
    ) {

        while (true) {

            const currentMonth = await page
                .locator(".ui-datepicker-month")
                .innerText();

            const currentYear = await page
                .locator(".ui-datepicker-year")
                .innerText();

            console.log("Current Month:", currentMonth);
            console.log("Current Year:", currentYear);

            if (currentMonth === targetMonth && currentYear === targetYear) {
                break;
            }

            if (isFuture) {

                await page.locator(".ui-datepicker-next").click();

            } else {

                await page.locator(".ui-datepicker-prev").click();
            }
        }

        // Select date
        const alldates = await page
            .locator(".ui-datepicker-calendar td")
            .all();

        for (const dt of alldates) {

            const datetext = (await dt.innerText()).trim();

            if (datetext === targDate) {

                await dt.click();
                break;
            }
        }
    }

    // Date picker
    const datepicker: Locator = page.locator("#datepicker");

    await expect(datepicker).toBeVisible();

    // Target date
    const date = "29";
    const month = "August";
    const year = "2026";

    // IMPORTANT: Open the date picker
    await datepicker.click();

    // Select target date
    await selectDate(year, month, date, page, true);

    // Verify selected date
    const expectedDate = "08/29/2026";

    await expect(datepicker).toHaveValue(expectedDate);

});