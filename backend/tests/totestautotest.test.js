const index = require("../totestautotest");

test('absolute - should return a positive number', () => {
    const result = index.absolute(1);
    expect(result).toBe(1);
})

test('absolute - should return a positive number', () => {
    const result = index.absolute(-1);
    expect(result).toBe(1);
})

