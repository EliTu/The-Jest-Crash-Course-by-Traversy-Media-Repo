# Jest Crash Course - by Traversy Media

## Intro

In this tutorial we will check out basic Jest practices for JavaScript unit testing. We will do basic JavaScript unit testing using Jest, set it up, get the basics of unit testing.

## Setting up Jest

First we will set up a package.json file by doing `npm init`. Next we will install Jest by typing `npm install --save-dev jest` (or `npm i -D jest`), to save it as a devDependency. Next we will add Jest to the npm scripts by changing the script of "test" to the value of "jest".

Next we will create a JavaScript file to test, which inside we will test basic functions. We would create another file named `(fileName).test.js`, which will always correspond to the name of the original file, but it will include the test name too, and Jest will automatically know what file is this.

## Basic testing - Primitives, Objects, Asynchronous

We will go to the JavaScript file and create a simple variable which is a function that adds to numbers. We will have to export it as well.

```js
const functions = {
  add: (a, b) => a + b
};

module.exports = test;
```

Next we will import the module into the 'test.test.js' file.

```js
const functions = require("./test");
```

Now we're ready to write our first test; We start by writing a test method `test()`. This method takes 2 arguments: The first, is a string that describes what we're doing and what we should get,so we pass `'Adds 2 + 2 to equal 4'`. The second, is an anonymous function which inside we will pass `expect()` argument, which in its parentheses we will write the actual function we are testing, and so `expect(functions.add(2, 2))`, lastly, at the end of the function we add the matcher method `.toBe()` which will hold the value we expect, and so `expect(functions.add(2, 2)).toBe(4);`.

Next we type `npm run test` in the console to run the script. We will now get the results of our test in the terminal. At the end we get 'Test Suites', which refers to the test files we currently have and it shows in green that that the tests have passed.

Lets make the test fail. We will alter the original function so that the result of 2 + 2 will not be 4, and then run the script again. Now we get red text of "failed". If we scroll up we can look for the `expected` value and `received` value, and so the `expected: 4` and `received: 5`, thus the test failed.

### Using `.not` for testing

Another way to test something is to indicate what value we shouldnt NOT expect. And so in the test string we can write something like `Adds 2 + 2 to NOT equal 5`, and follow up by adding `.not` before the `.toBe()`, which the value inside of it will be 5.

```js
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
```

We run the test again and we see that the test pass, as the result do not match 5, but 4.

### Primitive data types, truthy & falsy values and using `toBeNull()` matcher

We can use the `toBe()` method to check for any type of primitive data: Null, undefined, NaN, strings etc. Also, we can check for 'truthy' or 'falsy' values. 'falsy' values are things like 0, Null, undefined and so it is always good to make test to check if the values are not falsy or at least not a Null or undefined.

We will create another function named `isNull` which will just return us 'null'. Next we will create another test and pass in`'Should be null'` as the string. We will pass in `isNull()` as our function and change `.toBe()` to `.toBeNull()`.

```js
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
```

We run the test and it passes since the function does returns `null`. We will change the value of `isNull` function to `undefined` to test again, and indeed this time the test fails, as we received`undefined`.

### Testing for a specific value

We create another method named `checkValue` which simply takes a random element as an argument and returns it. We will then go and write another test that will check for a falsy value, and we will use the matcher method of `toBeFalsy()`.

```js
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
```

We run the test and it passes successfully, since null is a falsey value. If we pass in 0 inside `checkValue` and run the test, we should still be passing the test, since 0 is also falsy. If we pass in a value like 2, we should fail the test, since 2 is not a falsy value. Also, we can check for truthy values by using the checker `toBeTruthy()` or `not.toBeFalsy()`.

### Testing objects with `toEqual()` matcher

We will create another function that basically creates a user with a first name and a last name, and the returns the user.

```js
const functions = {
    createUser: () => {
      const user = {
        firstName: "John"
      };
      user["lastName"] = "Doe";
      return user;
    };
}
```

Now we will write a test that will expect to output an object with the `firstName` of John and `lastName` of Doe.

```js
test("Should be John Doe object", () => {
  expect(functions.createUser()).toBe({
    firstName: "John",
    lastName: "Doe"
  });
});
```

We expect this test to pass, as all of our inputs are correct, but the test still fails. Jest outputs the message `Compared values have no visual difference. Note that you are testing for equality with the stricter`toBe`matcher using`Object.is`. For deep equality only, use`toEqual`instead.`. This means that the matcher `toBe()` is for primitive types: strings, numbers, booleans etc. But an object or an array are actually a reference type in JavaScript, meaning we could have 2 object that look alike completeley, but they are different since they are stored in different areas of the system memory, and so they are treated differently. Thus, if we want to test for an object, we have to use the `toEqual()` matcher instead.

```js
test("Should be John Doe object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Doe"
  });
});
```

Now as we are able to pass the test because the object we receive is equal, or comparable, to the object we expect to receive.

### Less than and greater than

More useful matchers could check for 'less than' or 'greater than'. We will create another test that checks if 2 variables are less than 1600. And we can actually pass in all the code logic inside the `test()` function itself, and not import it from a different file, and after the logic pass in the `expect()` function.

```js
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});
```

We run the test and it passes. If we change `load2` value to 800, which will make the total of 1600, the test will fail because its not less than 1600. In this case we can pass `toBeLessThanOrEqual()` as a matcher, and then the test will pass.

```js
test("should be 1600 or less", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});
```

### RegEx with `toMatch()` matcher

We could also test regular expressions. We will write a test that checks for a single letter inside of a string.

```js
test("THere is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
```

This test passes, as there is no I inside of 'team'. if we put an 'I', as in 'Iteam', the test will fail. If we put an 'i', as in 'iteam', the test will pass, as RegEx is case sensitive (if we want it to be case insensitive we will pass an 'i' after the flag, '/I/i', and then the test will fail).

### Arrays with `toContain()` matcher

We can check the contents of an array for a specific value inside. We will create a test for an array of names and we will test to see if 'admin' is in the array. We will use 'toContain()' to check the contents of the array.

```js
test("Admin should be in usernames", () => {
  const usernames = ["john", "jim", "ann", "admin"];
  expect(usernames).toContain("admin");
});
```

If we take 'admin' out of the array, the test will fail.

### Working with asynchronous data - Testing Promises

We will first install Axios with `npm i axios`, so we could make more simple AJAX calls. We need to remember to get the Axios from the node_modules and include it in our code, and so we will use `require('axios')` to get use the axios library. Next we will write a function in our JavaScript file called `fetchUser`, and we will use the [https://jsonplaceholder.typicode.com/](JSON placeholder) free API website. We will use the 'users' resources, and we will fetch the user with the id of 1 using `axios.get()`. Since the request returns a Promise, we will use `.then()` to catch the result and `return` the data of the user data, and also `.catch()` to handle errors.

```js
const axios = require("axios");
fetchUser: () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.data)
    .catch(err => "error");
```

Now we will go ahead and test the async API request. The name of the user that we're fetching should be 'Leanne Graham' and so we will test to see if this is exactly the value we're receiving in this AJAX call.

When testing Asynchronous code, we need to add in the `test()` function `expect.assertions()`, pass 1 in the parentheses, which is used to testing in asynchronous code to verify that the number of assertions passed match the number of assertions we pass in the AJAX call, which in our case is 1. If we live this out, and the name doesn't match, it could still pass the test, and so we want to avoid this unexpected behavior. Next, we need to `return` the Axios call, and then use `.then()` to get the data, and inside the callback function we pass `expect().toEqual()` to test the object we're receiving.

```js
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
```

The test passes successfully. We will do a little check now: We will comment out the `expect.assertions()` function and change the name, as well as remove the `return` keyword on the Promise, and then run the test again, to see what happens if we don't pass in the `assertions()` when dealing with asynchronous code.

```js
test("User fetched name should be Leanne Graham", () => {
  // expect.assertions(1);
  functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham1");
  });
});
```

We can see that the test actually passed now, although the username is incorrect, and that means that if we won't `return` the promise, and won't use the `assertions()` it will pass no matter what, and so we have to make sure we always use them when dealing with asynchronous code.

### Working with asynchronous data - Async / Await

Now we will look at testing asynchronous data while using async / await to handle the Promise brought by Axios. We will refactor the last used async code to match the async / await syntax by getting rid of the `.then()` and placing the promise that Axios return with the `fetchUser()` inside a variable as `await` function.

```js
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
```

The test passes successfully.

## Testing code from the Traversy Media "JavaScript Cardio"
