
import{test, expect, chromium} from "@playwright/test"

test("handle tabs", async()=>{

const browser = await chromium.launch();
const context = await browser.newContext();

//1. Creating one page 

const parentpage = await context.newPage();
await parentpage.goto("https://testautomationpractice.blogspot.com/");



/*
//2. statements should go paralelly 

context.waitForEvent('page');  //Pending, fulfilled, rejected
parentpage.getByText('New Tab').click;   //Opens new tab or new page
*/


const[childpage] = await Promise.all([context.waitForEvent('page'),parentpage.getByText('New Tab').click()]);

await childpage.waitForTimeout(5000);

//Switch between pages and get titles

const pages = context.pages();
console.log("Number of pages created =",pages.length);

console.log("Title of the parent page is ",await pages[0].title());
console.log("Title of the child page is ",await pages[0].title());

//Alternative way

console.log("Title of the parent page is ",await parentpage.title());
console.log("Title of the child page is ",await childpage.title());








})