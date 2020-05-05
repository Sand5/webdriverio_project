var config = require("../config/main-config");
import  dataGenerators from '../utils/dataGenerators';
import ContactUs_PO from '../page-objects/ContactUs_PO';

describe("Test to check multipe actions on the webdriver uni page", () => {
  beforeEach(function () {
    ContactUs_PO.open();
    
    //var pagedetails = browser.getUrlAndTitle();
    //expect(pagedetails.title).contains("WebDriver");
    //expect(pagedetails.url).contains("university");
  });

  it("Testing muliple sections of the webdriver uni site", () => {
    //const contactUsButton = $("#contact-us");
    //contactUsButton.click();
    //browser.waitAndClick("#contact-us");
    //browser.switchWindow("WebDriver | Contact Us");

    expect(browser.getUrl()).to.contains("/Contact-Us");

    //const first_name = $("//*[@name='first_name']");
    //const last_name = $("//*[@name='last_name']");
    //const email_address = $("//*[@name='email']");
    //const comments = $("textarea");
   // const submit = $("[type='submit']");


    //first_name.setValue(config.firstName);
    //last_name.setValue(config.lastName);
    //email_address.setValue("SimonSays@mail.com");
    //comments.setValue("Hello is me your looking for");
    //submit.click();

    //browser.pause(2000);
    //browser.waitAndSendKeys("//*[@name='first_name']", config.firstName);
    //browser.waitAndSendKeys("//*[@name='last_name']", config.lastName);
    //browser.waitAndSendKeys("//*[@name='email']", dataGenerators.generateRandomEmailAddress());
    //browser.waitAndSendKeys("textarea", dataGenerators.generateRandomString());
    //browser.waitAndClick("[type='submit']");

    
    ContactUs_PO.firstName.setValue(config.firstName);
    ContactUs_PO.lastName.setValue(config.lastName);
    ContactUs_PO.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
    ContactUs_PO.comments.setValue(dataGenerators.generateRandomString());
    ContactUs_PO.submit();



    //const pagedetails = browser.getUrlAndTitle();
    expect(ContactUs_PO.getSuccessfulContactHeader.getText()).contain("Thank You");
  });
});
