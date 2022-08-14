const sum = require("./sum_arguments");

describe("Testing the sum function" ,()=>{
    test("Add 4 positive numbers",()=>{
        expect(sum(4)).toBe(6)
    });

    test("Add 7 positive numbers",()=>{
        expect(sum(7)).toBe(21)
    });
});