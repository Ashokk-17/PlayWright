
import {test, expect, Locator} from '@playwright/test';

test("xpath axis", async ({page})=>{


    await page.goto("https://www.w3schools.com/html/html_tables.asp ");

    //self axis 
    const selftag: Locator = page.locator("//td[normalize-space()='Germany']/self::td");
    await expect(selftag).toHaveText("Germany");


    //Parent axis , get parent tr of germany cell

    const parentrow:Locator = page.locator("//td[normalize-space()='Germany']/parent::tr");
    await expect(parentrow).toHaveText("Alfreds Futterkiste Maria Anders Germany");
    console.log( await parentrow.textContent());


    //child axis, get all child td of the second tr in the table 

    const childtd:Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
    await expect(childtd).toHaveCount(3);

    //ancestor axis, get the ancestor table of germany cell

    const ancestortable:Locator = page.locator("//td[normalize-space()='Germany']/ancestor::table");
    await expect(ancestortable).toHaveAttribute("id","customers");
    console.log(await ancestortable.getAttribute("id"));

    // descendant axis, get all descendant td of the table
    
    const descendanttd:Locator = page.locator("//table[@id='customers']/descendant::td");
    await expect(descendanttd).toHaveCount(18);






})