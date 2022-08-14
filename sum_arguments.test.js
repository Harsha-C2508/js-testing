const sum = require("./sum_arguments");

describe("Testing the sum function" ,()=>{
    test("Add 4 positive numbers",()=>{
        expect(sum(4)).toBe(6)
    });

    test("Add 7 positive numbers",()=>{
        expect(sum(7)).toBe(21)
    });

    test("Add 12 positive numbers",()=>{
        expect(sum(12)).toBe(66)
    });

    test("Add 42 positive numbers",()=>{
        expect(sum(42)).toBe(861)
    });
});