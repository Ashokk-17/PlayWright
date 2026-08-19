import {expect, test} from '@playwright/test'


//To Hover

test("mouse actions", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropme = page.locator(".dropbtn");
    await  dropme.hover();
    const laptop = page.locator('.dropdown-content a:nth-child(2)');
    await laptop.hover();
    await laptop.click();
    await page.waitForTimeout(5000);


})




//To right click 

test("Right click ", async({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

const rightclick = page.locator('context-menu-one btn btn-neutral');
await rightclick.click({button:'right'});
await page.waitForTimeout(5000);



})



//To double click 

test.only("double click", async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");
    const tocopy = page.locator("button[ondblclick='myFunction1()']");
    await tocopy.dblclick();

    const field2 = page.locator('#field2');
    expect(field2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);
    
})