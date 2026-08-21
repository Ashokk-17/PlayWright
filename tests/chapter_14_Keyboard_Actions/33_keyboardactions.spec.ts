// Key board methods : 
// 1. insertText
// 2. Down
// 3. Press
// 4. Type 
// 5. Up

// Example : await pageXOffset.keyboard('Down');


import {test, expect} from '@playwright/test';

test("Keyboard actions", async ({page})=> {

 await page.goto("https://testautomationpractice.blogspot.com/");

 //Focus on a page 
const field = page.locator("#input1");
await field.focus();
await page.keyboard.insertText('Hello Ashok');
await page.waitForTimeout(5000);

 

 // Ctrl + A
 await page.keyboard.down('Meta');
 await page.keyboard.press('A');
 await page.keyboard.up('Meta');         // you can also use ('Control+A') 



 //Ctrl + C
await page.keyboard.down('Meta');
 await page.keyboard.press('C');
 await page.keyboard.up('Meta');
 

 // press tab 2 times 
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.waitForTimeout(2000);

 //Ctrl + V
await page.keyboard.press('Meta+V');

 // press tab 2 times 

await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

 // Ctrl + v
await page.keyboard.press('Meta+V');


await page.waitForTimeout(10000);




})