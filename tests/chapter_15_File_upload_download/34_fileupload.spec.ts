import {test, expect} from '@playwright/test';

test("File upload single", async ({page})=> {

 await page.goto("https://testautomationpractice.blogspot.com/");



 // Single file Upload

 const singlfile = await page.locator("#singleFileInput").setInputFiles('../Upload_files/file2.txt');
 const singlupload = await page.locator("button:has-text('Upload Single File')").click();
 //await page.getByRole('button', { name: 'Upload Single File' }).click();

 await page.waitForTimeout(5000);

 
const msg = await page.locator("#singleFileStatus").textContent();
expect(msg).toContain('file2.txt');

console.log("File upload is successful",msg);


 await page.waitForTimeout(5000);

})


//multiple file upload

test.only("File upload multiple", async ({page})=> {

 await page.goto("https://testautomationpractice.blogspot.com/");



 // Multiple file Upload

 const Multiplefile = await page.locator("#multipleFilesInput").setInputFiles(['../Upload_files/file2.txt','../Upload_files/file1.png']);
 const Multiupload = await page.locator("button:has-text('Upload Multiple Files')").click();
 //await page.getByRole('button', { name: 'Upload Single Files' }).click();

 await page.waitForTimeout(5000);

 
const msg1 = await page.locator("#multipleFileStatus").textContent();
 expect(msg1).toContain('file2.txt');
 expect(msg1).toContain('file1.png');

console.log("File upload is successful",msg1);


 await page.waitForTimeout(5000);

})