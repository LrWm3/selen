let badSslExpiredPageObject = require('./badssl-expired-pageobject');

describe('badssl expired page', function () {
  it('should be able to open', function() {
    badSslExpiredPageObject.get();

    expect(badSslExpiredPageObject.getBadText()).toBeDefined();
  });
});
