# selen, a protractor guide

I learn about selenium and protractor.

## change the base url

option 1

```
protractor --baseUrl=https://angularjs.org conf.js
```

option 2

```js
// in conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  baseUrl: 'https://angularjs.org' // sets the default baseUrl
};
```

## passing in arbitray stuff

[see here](https://github.com/angular/protractor/blob/5.4.1/lib/config.ts#L517)

```ts
  /**
   * The params object will be passed directly to the Protractor instance,
   * and can be accessed from your test as browser.params. It is an arbitrary
   * object and can contain anything you may need in your test.
   * This can be changed via the command line as:
   *   --params.login.user "Joe"
   *
   * Example:
   * params: {
   *   login: {
   *     user: 'Jane',
   *     password: '1234'
   *   }
   * }
   */
  params?: any;

```

## Running it

Install protractor and then do this.

```bash
protractor conf.js
```
