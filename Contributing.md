# How to contribute

I love pull requests. And following this simple guidelines will make your pull request easier to merge.


## Submitting pull requests

1. Create a new branch, please don’t work in master directly.
2. Add failing tests (if there’re any tests in project) for the change you want to make. Run tests (see below) to see the tests fail.
3. Hack on.
4. Run tests to see if the tests pass. Repeat steps 2–4 until done.
5. Update the documentation to reflect any changes.
6. Push to your fork and submit a pull request.


## JavaScript code style

See [ESLint](.eslintrc) config files for more details.

- Tab indentation.
- Single-quotes.
- Semicolons.
- Declare variables just before their first usage.
- Multiple variable statements.
- Make `const`, not `var`.
- Use `===` and `!==` over `==` and `!=`.
- Return early.
- Limit line lengths to 120 chars.
- Prefer readability over religion.
- Use ES6.

Example:

```js
function eatFood(food) {
    if (!food.length) {
    	return ['No food'];
    }

    return food.map(dish => `No ${dish.toLowerCase()}`);
}

const food = [
  'Pizza',
  'Buger',
  'Coffee',
];
console.log(eatFood(food));
```


## Other notes

- If you have commit access to repo and want to make big change or not sure about something, make a new branch and open pull request.
- Don’t commit generated files: compiled from Stylus CSS, minified JavaScript, etc.
- Don’t change version number and changelog.
- Install [EditorConfig](http://editorconfig.org/) plugin for your code editor.
- Feel free to [ask me](http://sapegin.me) anything you need.


## Building and running tests

Install dependencies:

```bash
npm install
```

Build / run tests:

```bash
npm test
```
