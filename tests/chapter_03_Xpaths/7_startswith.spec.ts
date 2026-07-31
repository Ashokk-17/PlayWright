import { test, expect, Locator } from "@playwright/test";

test("Verify the xpath", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page.locator("xpath=//img[@alt='Tricentis Demo Web Shop']")).toBeVisible();



    //Contains();

    const link: Locator = page.locator("//h2/a[contains(@href,'computer')]");

    const link_number: number = await link.count();

    console.log("total number of links =", link_number);

    expect(link_number).toBeGreaterThan(1);


    //Strict mode violation  === textcontent();

    console.log("1st computer related product"), await link.first().textContent();

    console.log("lat computer related product"), await link.last().textContent();

    console.log("Nth computer related product"), await link.nth(1).textContent();

    // index starts from 0


    //getting all products name in a list or array format

    let product_names: string[] = await link.allTextContents();

    for (let product of product_names) {
        console.log(product);
    }


    //Startswith

    const starting_with: Locator = page.locator(
        "//h2/a[starts-with(text(),'Build your own')]"
    );

    const count: number = await starting_with.count();

    console.log("Starts-with count =", count);

    expect(count).toBeGreaterThan(0);


    //text()

    const reg_linl: Locator = page.locator("//a[@text()='Register']");

    await expect(reg_linl).toBeVisible();



    // last 
const lastitem: Locator = page. locator("//div[@class='column follow-us']//li[last()]");
await expect(lastitem).toBeVisible();
console.log("last text element", await lastitem.textContent());



    // position

const positionitem:Locator = page. locator("//div[@class='column follow-us']//li[position(3)]");
await expect(positionitem).toBeVisible();
console.log("3rd text element", await positionitem.textContent());



});