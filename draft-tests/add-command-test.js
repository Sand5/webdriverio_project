describe("Chai assertions", () => {
  beforeEach(function () {
    browser.url("./");
  });

  it("Test webdriveruni login portal", () => {
    const clickById = $("#login-portal");
    clickById.click();

    browser.switchWindow("WebDriver | Login Portal");
    const loginPageData = browser.getUrlAndTitle();

    expect(loginPageData.title).to.contains("Login Portal");
    expect(loginPageData.url).to.contains("Login-Portal");
  });
});
