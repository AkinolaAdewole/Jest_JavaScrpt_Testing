const {generateText} =require('./util');


// Unit Test
test('should output name and age',()=>{
    const text = generateText('Adewole', 21);
    expect(text).toBe('Adewole (21 years old)');
})


// Integration Test
test('should output data-less text', ()=>{
    const text =generateText('', null);
    expect(text).toBe(' (null years old)');
          //OR
    const text2 =generateText();
    expect(text2).toBe('undefined (undefined years old)')
})