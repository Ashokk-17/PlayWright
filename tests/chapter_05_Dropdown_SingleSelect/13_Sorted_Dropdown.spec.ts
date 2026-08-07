import {test, expect } from '@playwright/test';

test("Sorted dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

// to check drop down options

const dropdown_options = page.locator("#animals > option");
console.log(await dropdown_options.allTextContents());
const option_text : string[] = (await dropdown_options.allTextContents()).map((text) => text.trim());
const originalList : string[] = option_text;
const sortedList : string[] = option_text.sort();
console.log("Original List : ", originalList);
console.log("Sorted List : ", sortedList);

expect(originalList).toEqual(sortedList);

}
);
