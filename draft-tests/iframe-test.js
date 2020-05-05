describe("Test contact us logic via webdriver uni site", () => {
  beforeEach(function () {
    browser.url("/IFrame/index.html");
  });

  it("Test the clicking of a given button housed within a IFrame", () => {
    const iframe = $("#frame");
    browser.switchToFrame(iframe);
    const findOutMore_Button = $("//*[text()= 'Our Products']");

    findOutMore_Button.waitForDisplayed();
    browser.pause(5000);
    findOutMore_Button.click();
  });
});
