import {test, expect } from '@playwright/test';

test("Sorted dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
const dropdown_options = page.locator("#animals > option");
console.log(await dropdown_options.allTextContents());
const option_text : string[] = (await dropdown_options.allTextContents()).map((text) => text.trim());


const myset = new Set<string[]>();
const duplicates : string[] = [];

for (const text of option_text) {
    if (myset.has(text)) {
        duplicates.push(text);
    } else {
        myset.add(text);
    }

}

console.log("Duplicate values are : ", duplicates);

if (duplicates.length > 0) {
    console.log("Duplicate values are present in the dropdown");
} else {
    console.log("No duplicate values are present in the dropdown");
}

expect(duplicates.length).toBe(0);

}
);