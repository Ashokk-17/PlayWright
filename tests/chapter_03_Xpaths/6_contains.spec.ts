import { test, expect, Locator } from "@playwright/test";

test("Verify the xpath", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page.locator("xpath=//img[@alt='Tricentis Demo Web Shop']")).toBeVisible();



    //Contains();

const link: Locator = page.locator("//h2/a[contains(@href,'computer')]");

 const link_number: number= await link.count();
console.log("total number of links =", link_number);
expect(link_number).toBeGreaterThan(1);


//Strict mode violation  === textcontent();

console.log("1st computer related product"), await link.first().textContent();
console.log("lat computer related product"), await link.last().textContent();
console.log("Nth computer related product"), await link.nth(1).textContent();
// index starts from 0



//getting all products name in a list or array format

let product_names:string[] = await link.allTextContents();

for(let product of product_names){
    console.log(product);
}




}

)