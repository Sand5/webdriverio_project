describe("Test the various WebdriverIO Wait Commands", () => {
  beforeEach(function () {
    browser.url("./");
  });

  it.skip("Test waitForExist", () => {
    //https://webdriver.io/docs/api/element/waitForExist.html
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    //Wait for an element for the provided amount of milliseconds to be present within the DOM.
    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    clickMeButton.waitForExist(10000);
    /*
      while (!clickMeButton.isClickable()) {
          clickMeButton.waitForClickable(2000)
      }
        clickMeButton.click();

      //clickMeButton.click();
    //test will fail... even though its in the DOM doesnt mean it clickable
      */
  });

  it("Test waitForDisplayed", () => {
    //https://webdriver.io/docs/api/element/waitForDisplayed.html
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    //Wait for an element for the provided amount of milliseconds to be present within the DOM.
    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    clickMeButton.waitForDisplayed(10000);
    clickMeButton.click();
  }); //test will pass...
});
