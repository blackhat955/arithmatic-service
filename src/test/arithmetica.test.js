const { add, sub, mul, div } = require("../arithmetica");

test('2 + 3 equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('25 + 3 equal to 28', () => {
    expect(add(25, 3)).toBe(28);
});

test('29 + 39 equal to 68', () => {
    expect(add(29, 39)).toBe(68);
});

test('29 - 39 equal to -10', () => {
    expect(sub(29, 39)).toBe(-10);
});

test('2 * 9 equal to 18', () => {
    expect(mul(2, 9)).toBe(18);
});

test('39/3 equal to 13', () => {
    expect(div(39, 3)).toBe(13);
});