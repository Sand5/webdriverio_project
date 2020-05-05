describe("Test contact us logic via webdriver uni site", () => {
  beforeEach(function () {
    browser.url("./");
  });

  it("Test the contact us page", () => {
    const contactUsButton = $("//h1[text()='CONTACT US']");
    contactUsButton.click();

    browser.switchWindow("WebDriver | Contact Us");

    const firstNameTextField = $("[name='first_name']");
    firstNameTextField.waitForDisplayed();
    firstNameTextField.addValue("Add your text here");
    browser.pause(2500);

    firstNameTextField.clearValue();
    browser.pause(2500);

    firstNameTextField.setValue("Hello how are you?");
    browser.pause(2500);
  });
});
