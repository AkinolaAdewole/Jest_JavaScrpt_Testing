const {generateText} =require('./util');

test('should output name and age',()=>{
    const test = generateText('Adewole', 21);
    expect(text).toBe('Adewole (21 years old)');
})