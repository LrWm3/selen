var BadSslExpiredPageObject = function () {

  var page;
  var badText;

  this.get = async function () {
    // We expect the baseUrl to be set appropriately
    page = await browser.get();
    badText = element(by.css('#content'));
  };

  this.getBadText = function() {
    return element(by.css('#content')).getText();
  };
};
module.exports = new BadSslExpiredPageObject();
