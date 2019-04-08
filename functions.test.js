const functions = require('./functions');

// Basic tests:

// test('Adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2, 2)).toBe(4);
// });

// test('Adds 2 + 2 to NOT equal 5', () => {
//     expect(functions.add(2, 2)).not.toBe(5);
// });

// test('Should be null', () => {
//     expect(functions.isNull()).toBeNull();
// });

// test('Should be falsy', () => {
//     expect(functions.checkValue(2)).toBeFalsy();
// });

// Test for objects:

// test('Should be John Doe object', () => {
//     expect(functions.createUser()).toEqual({
//         firstName: 'John',
//         lastName: 'Doe'
//     })
// });

// Test for less or more:

// test('should be 1600 or less', () => {
//     const load1 = 800;
//     const load2 = 700;
//     expect(load1 + load2).toBeLessThanOrEqual(1600);
// });


// Test RegEx:

// test('THere is no I in team', () => {
//     expect('team').not.toMatch(/I/);
// });

// Arrays:

// test('Admin should be in usernames', () => {
//     const usernames = ['john', 'jim', 'ann', 'admin'];
//     expect(usernames).toContain('admin');
// });

// Async data - Promise:

// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

// Async data - Async / Await:

// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
// });