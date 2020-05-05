describe("Selectors Test", () => {
  beforeEach(function () {
    // browser.setWindowSize(1800, 1200);
    browser.url("./");
  });

  it("By ID", () => {
    const clickById = $("#contact-usu");
    clickById.click();

    console.log("HOMEPAGE HEADER:" + browser.getTitle());
    browser.pause(2000);

    browser.switchWindow("WebDriver | Contact Us");
    console.log("Contact HEADER:" + browser.getTitle());
  });
});
