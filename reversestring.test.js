const reverseString = require('./reversestring');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String should be reversed', () => {
    expect(reverseString('hello')).toEqual('olleh');
});