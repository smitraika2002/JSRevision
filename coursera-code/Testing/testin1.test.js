const { test, expect } = require('@jest/globals');

const addfive = require('./testin1');

test ('add 5 to the input value', () => {
    expect(addfive(10)).toBe(15);
    expect(addfive(-5)).toBe(0);
    expect(addfive(0)).toBe(5);
    expect(addfive(3.5)).toBe(8.5); // false one
}); 