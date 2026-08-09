import {test, expect, Locator} from '@playwright/test';

test("comparing methods", async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/");


//Total number of products in the page are

const products = page.locator('.product-title');
const productCount = await products.count();
console.log("Total number of products:", productCount);

//innertext vs textcontent
console.log("innerText of product", await products.nth(1).innerText());

console.log("text content of product", await products.nth(1).textContent());

//for all products getting inner text and inner content
const productinnertext : string[] = await products.allInnerTexts();  //You can also use products.nth(i).innertext() using for loop
console.log("inner text of all products", productinnertext);

const count = await products.count();
for (let i=0; i<count; i++){
    const productname : string = await products.nth(i).innerText();
    console.log(productname);


    const productname_1 : string | null= await products.nth(i).textContent();
    console.log(productname_1);

    console.log(productname_1?.trim());

}


// allinnerText() vs alltextcontent()

const producttextcontent : string[] = await products.allTextContents();
console.log(producttextcontent);


//trimming the text content 

const producttrimmed: string[] = await producttextcontent.map(text=>text.trim());
console.log("products name after trimmed", producttrimmed);



// all 

const product_all: Locator[] = await products.all();
console.log(product_all);

console.log(await product_all[1].innerText());


// displaying innertext of all  ----- for of loop 

for ( let innertext_all of product_all){
    console.log ( await innertext_all.innerText());
}


// for in loop 

for (const i in product_all){
    console.log(await product_all[Number(i)].innerText());
}







}
)
