// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//Function 1
test('phone number - true', () => {
    expect(functions.isPhoneNumber("510-402-7462")).toBe(true);
});
test('phone number - true', () => {
    expect(functions.isPhoneNumber("608-960-2101")).toBe(true);
});
test('phone number - false', () => {
    expect(functions.isPhoneNumber("510402746")).toBe(false);
});
test('phone number - false', () => {
    expect(functions.isPhoneNumber("@@@@_+_:)")).toBe(false);
});

//Function 2
test('email - true', () => {
    expect(functions.isEmail("arnavmehta00@gmail.com")).toBe(true);
});
test('email - true', () => {
    expect(functions.isEmail("snsheth@ucsd.edu")).toBe(true);
});
test('email - false', () => {
    expect(functions.isEmail("@@@.edu")).toBe(false);
});
test('email - false', () => {
    expect(functions.isEmail("siasheth")).toBe(false);
});

//Function 3
test('pw - true', () => {
    expect(functions.isStrongPassword("StrongPassword9")).toBe(true);
});
test('pw - true', () => {
    expect(functions.isStrongPassword("Very_Strong_Pw9")).toBe(true);
});
test('pw - false', () => {
    expect(functions.isStrongPassword("hi")).toBe(false);
});
test('pw - false', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

//Function 4
test('date - true', () => {
    expect(functions.isDate("11/21/2022")).toBe(true);
});
test('date - true', () => {
    expect(functions.isDate("90/90/1990")).toBe(true);
});
test('date - false', () => {
    expect(functions.isDate("11212022")).toBe(false);
});
test('date - false', () => {
    expect(functions.isDate("21st November, 2022")).toBe(false);
});

//Function 5
test('colour - true', () => {
    expect(functions.isHexColor("#111111")).toBe(true);
});
test('colour - true', () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});
test('colour - false', () => {
    expect(functions.isHexColor("#0000001")).toBe(false);
});
test('colour - false', () => {
    expect(functions.isHexColor("12121")).toBe(false);
});