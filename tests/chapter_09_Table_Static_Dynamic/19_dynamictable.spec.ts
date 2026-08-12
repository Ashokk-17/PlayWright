import {test, expect, Locator } from '@playwright/test'

test ("static", async ({page})=>{

await page.goto("https://practice.expandtesting.com/dynamic-table");

//to validate table To be visible
const table: Locator = page.locator("table.table tbody");
await expect(table).toBeVisible();

////select all the rows then find number of rows

let rows:Locator [] = await table.locator("tr").all();
console.log("Number of rows in table are : ", rows.length);
expect(rows).toHaveLength(4);

//For chrome process get the value of CPU load 

//For this, reach each row to check the chrome presence 

let cpuload ='';
for(const row of rows){

    const processName : string = await row.locator("td").nth(0).innerText();
    if (processName === "Chrome"){
        cpuload = await row.locator("td",{hasText:'%'}).innerText();
        console.log("CPU Load of chrome is : ", cpuload);
        break;

    }
}

//await page.waitForTimeout(5000);

console.log("validation successful");


//Compare it with value in Yellow label 

let yellowbox: string = await page.locator("#chrome-cpu").innerText();
console.log("Chrome CPU load of yellow box is ", yellowbox);


if(yellowbox.includes(cpuload)){

    console.log("CPU load is equal");
}
else{
    console.log("CPU load is not equal")
}

expect(yellowbox).toContain(cpuload);

await page.waitForTimeout(3000);











}
)

