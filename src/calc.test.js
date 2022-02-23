const { sum, sub, times, div, pow } = require('./calc');

test('Sum test', () => {
    expect(sum(1, 2)).toBe(3);
})

test('Sub test', () => {
    expect(sub(3, 2)).toBe(1);
})

test('Times test', () => {
    expect(times(3, 4)).toBe(12);
})

test('Div test', () => {
    expect(div(6, 3)).toBe(2);
})

test('Pow test', () => {
    expect(pow(5, 2)).toBe(25);
})

test('Pow test with 0', () => {
    expect(pow(5, 0)).toBe(1);
})