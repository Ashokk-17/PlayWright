import {test, expect} from '@playwright/test';

test("Keyboard actions", async ({page})=> {

 await page.goto("https://testautomationpractice.blogspot.com/");


 const singlfile = page.locator("#singleFileInput").setInputFiles('../Upload_files/file2.txt');
 const singlupload = page.locator("button:has-text('Upload Single File')").click();

 await page.waitForTimeout(5000);

 







})