exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo.spec.js'],
  baseUrl: 'https://angularjs.org',
  'goog:chromeOptions': {
    'args': ['ignore-certificate-errors']
  }
};
