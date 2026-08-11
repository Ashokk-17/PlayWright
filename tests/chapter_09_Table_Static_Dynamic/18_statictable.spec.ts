
import {test, expect, Locator } from '@playwright/test'

test ("static", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


//To check table is present 

const table: Locator = page.locator("table[name = 'BookTable']");

await expect(table).toBeVisible();

//count number of rows in a table 

const rows: Locator = page.locator("table[name = 'BookTable'] tbody tr");
await expect(rows).toHaveCount(7); //approach 1


const rows1 : number = await rows.count();
console.log("Number of rows in table", rows1);
expect (rows1).toBe(7); //aproach 2

//Total number of columns or headers 

const columns: Locator = page.locator("table[name = 'BookTable'] tbody tr th"); 

// const columns: Locator = rows.locator("th");  //you can also use this 

await expect(columns).toHaveCount(4);







})