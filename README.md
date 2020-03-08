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
