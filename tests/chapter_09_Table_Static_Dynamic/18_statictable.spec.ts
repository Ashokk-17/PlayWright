
import {test, expect, Locator } from '@playwright/test'

test ("static", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


//To check table is present 

const table: Locator = page.locator("table[name = 'BookTable']");

await expect(table).toBeVisible();

//count number of rows in a table 

const rows: Locator = page.locator("table[name = 'BookTable'] tbody tr");
await expect(rows).toHaveCount(7); //approach 1


const rows1 : number = await rows.count();
console.log("Number of rows in table", rows1);
expect (rows1).toBe(7); //aproach 2

//Total number of columns or headers 

const columns: Locator = page.locator("table[name = 'BookTable'] tbody tr th"); 

// const columns: Locator = rows.locator("th");  //you can also use this 

await expect(columns).toHaveCount(4);

//Read all data of 2nd row index 2 means 3rd row includng header

const secondrowcells: Locator = rows.nth(2).locator('td');
let secondrowtexts: string[] = await secondrowcells.allInnerTexts();

console.log("2nd row texts are :", secondrowtexts);   //[ 'Learn Java', 'Mukesh', 'Java', '500' ]

expect(secondrowtexts).toEqual(['Learn Java', 'Mukesh', 'Java', '500']);

console.log("printing 2nd row data.....")

for (let text of secondrowtexts){
    console.log(text);
}


//Reading all data from table except header

console.log("Printing all data of the table...");

const allrowdata = await rows.all();
console.log(" Bookname      Author      Subject     Price");

for (let row of allrowdata.slice(1)){
    const cols = await row.locator('td').allInnerTexts();
    console.log(cols.join('\t'));

}


//Printing book names where author is mukesh 

console.log("Books written by mukesh are ........");


const mukeshBooks : string[] = [];

for (let row of allrowdata.slice(1)){

    const cells = await row.locator('td').allInnerTexts();
    const author = cells[1];
    const book = cells[0];


    if(author === 'Mukesh'){
        console.log(`${author} \t ${book}`);
        mukeshBooks.push(book);
    }

}

expect (mukeshBooks).toHaveLength(2);



//Calculate the totalprice of all the book 

let totalprice: number = 0;

for(let row of allrowdata.slice(1)){

    const cells = await row.locator('td').allInnerTexts();
    const price = cells[3];

    totalprice = totalprice + parseInt(price);

}

console.log("Total price = ", totalprice);

expect(totalprice).toBe(7100);




})