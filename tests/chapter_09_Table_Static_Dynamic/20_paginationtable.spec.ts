import {test, expect, Locator} from '@playwright/test'

test("Pagination table", async({page})=>{


await page.goto("https://datatables.net/");


let hasmorepages = true;

while(hasmorepages)
    {
        const rows=await page.locator("#myTable tbody tr").all();

        for( let row of rows){
            console.log(await row.innerText());

        }

        await page.waitForTimeout(2000);


        //button[data-dt-idx="next"]
        //button[aria-label="Next"]
        
        const nextbutton: Locator= page.locator("button[aria-label='Next']");
        const isDisabled = await nextbutton.getAttribute('class');  //dt paging button sabled next


        if(isDisabled?.includes('disabled')){

            hasmorepages=false;
        }
        else{
            await nextbutton.click();

        }
        

}
}

)


test("filter the rows and check the rows count",async({page})=>{

    await page.goto("https://datatables.net/");

    const dropdown : Locator= page.locator('#dt-length-0');
    await dropdown.selectOption({label:'25'});



    const rows = await page.locator("#myTable tbody tr").all();
    expect(rows.length).toBe(25);



})

//search for specific data in table and compare

test.only("earch for specific data in table and compare", async({page})=>{
    
await page.goto("https://datatables.net/");

const searchbox:Locator= page.locator("input[type=search]");
searchbox.fill('Paul Byred');

const rows=await page.locator("#myTable tbody tr").all();

if(rows.length>=1){

    for(let row of rows){
        row.innerText();

    }
}
else{
    console.log("No rows found");
}

//


}
)






