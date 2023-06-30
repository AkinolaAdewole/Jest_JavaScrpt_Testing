const {generateText, checkGenerateText} =require('./util');
const puppeteer= require('puppeteer');


// Unit Test
test('should output name and age',()=>{
    const text = generateText('Adewole', 21);
    expect(text).toBe('Adewole (21 years old)');
})


// OR 
test('should output data-less text', ()=>{
    // const text =generateText('', null);
    // expect(text).toBe(' (null years old)');
          //OR
    const text2 =generateText();
    expect(text2).toBe('undefined (undefined years old)')
})



// Integration Test
test('should generate a valid text output',()=>{
    const text = checkGenerateText('Adewole', 21);
    expect(text).toBe('Adewole (21 years old)');
})


// End to End Test
test('should click around', async ()=>{
    const browser= await puppeteer.launch({
        headless:false,
        slowMo:80,
        args:['--window-size=1920, 1080']
    });
    const  page= await browser.newPage();
    await page.goto('C:/Users/Adewole/Desktop/TYPESCRIPT/js-testing-introduction-starting-setup/js-testing-introduction-starting-setup/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Akinola');

    await page.click('input#age');
    await page.click('input#age', '28');

    await page.click('#btnAddUser');
}, 25000);








// const AddUser() in app.js has many dependencies, it is a function that is taking input and not returning output.
// Const addUser() is a function that is adding to the DOM