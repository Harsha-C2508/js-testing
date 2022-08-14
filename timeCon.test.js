const timeToString = require("./timeCon")

describe("Converting time to strings",()=>{
    test('Convert time in ms to time in seconds', () => { 
        expect(timeToString(5200)).toBe("5 seconds")

     })

     test('Convert time in ms to time in min', () => { 
        expect(timeToString(60000)).toBe("1 minutes")

     })

     test('Convert time in ms to time in min', () => { 
        expect(timeToString(180000)).toBe("3 minutes")

     })

     test('Convert time in ms to time in min', () => { 
        expect(timeToString(200000)).toBe("4 minutes")

     })
})