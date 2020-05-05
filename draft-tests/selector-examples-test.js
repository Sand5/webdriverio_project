describe("Selectors Test", () => {
  beforeEach(function() {
   // browser.setWindowSize(1800, 1200);
     browser.url("./");
  });

  it("By ID", () => {
    const clickById = $("#contact-us");
    clickById.click();

    console.log('HOMEPAGE HEADER:' +browser.getTitle())
    browser.pause(2000);

    browser.switchWindow('WebDriver | Contact Us');
    console.log('Contact HEADER:' +browser.getTitle())
  });

  it("By Class", () => {
    const clickByClass = $(".section-title");
    clickByClass.click();
    browser.pause(2000);
  });

  it("By XPATH", () => {
    const clickByXpath = $("//h1[text()='CONTACT US']/../..");
    clickByXpath.click();
    browser.pause(2000);
  });

  it("By CSS", () => {
    const clickBycss = $("#contact-us h1");
    clickBycss.click();
    browser.pause(2000);
  });
});
