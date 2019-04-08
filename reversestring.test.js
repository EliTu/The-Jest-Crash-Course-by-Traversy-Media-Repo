const reverseString = require('./reversestring');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String should be reversed', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String should be reversed', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});