

//An iframe (inline frame) is an html element that allows u to embed another html document within the current doc
//Iframes are currently used to embed external contents such as videos, maps and other web pages within 
//affecting the parent document 

import{test, expect} from '@playwright/test'

test("frames validation", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames");


    //Total number of frames present 
    const frames = page.frames();
    console.log("Total number of frames are: ", frames.length);

    //Approach 1 using page.frames
/*
    const frame1 = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1"});

    if(frame1){
        await page.locator("input[name='mytext1']").fill("Hellow");
    }
    else{
        console.log("Frame not found");
    }

    await page.waitForTimeout(5000);
*/


    //Approach 2 : Using frames locator

    const frame1_ip = page.frameLocator("[src='frame_1.html']").locator("input[name='mytext1']");

    await frame1_ip.fill("John");
    await page.waitForTimeout(5000);


})





test.only("frames3 validation", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");


    //Total number of frames present 
    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
    

    //How to handle inner frames or child frames 
    if(frame3){


       await frame3.locator("input[name='mytext3']").fill("welcome");
       const childFrames= frame3.childFrames();
       console.log("childframes inside the frame 3 :", childFrames.length);
        const radio = childFrames[0].getByLabel("I am a human");
        await radio.check();
        await expect(radio).toBeChecked();
        await page.waitForTimeout(5000);

        
    }
    else{
        console.log("frame not found");
    }

})
    