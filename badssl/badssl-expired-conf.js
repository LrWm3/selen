exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['badssl-expired.spec.js'],
  baseUrl: 'https://expired.badssl.com',
  'goog:chromeOptions': {
    'args': ['ignore-certificate-errors']
  }
};
