var ContactUs_Page = require("../deprecated_po/ContactUs_Page.js");

beforeEach(async () => {
  await browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact us form WebdriverUni", () => {
  it.skip("Should be able to submit a successful submission via contact us form", () => {
    ContactUs_Page.submitAllInformationViaContactUsForm(
      "Joe",
      "Blogs",
      "JoeBlogs@gmail.com",
      "How are you?"
    );
    ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
    try {
    
      expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal(
        "Thank You for your Message!"
      );
    } catch (error) {
      console.log("Exception " + err);
      assert.fail();
    }

    /*
    ContactUs_Page.setFirstName('Joe');
    ContactUs_Page.setLastName('Blogs');
    ContactUs_Page.setEmailAddress('JoeBlogs@mail.com');
    ContactUs_Page.setComments('This is a new comment');
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmSuccessfulSubmission();
    */
  });

  /*
  it('Should not be  able to submit a successful submission via contact us form as all fields are required', function () {
    ContactUs_Page.setFirstName('Mike');
    ContactUs_Page.setLastName('Woods');
    ContactUs_Page.setEmailAddress('mike_joness@mail.com');
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmUnSuccessfulSubmission();


  });


  it('Should not be  able to submit a successful submission via contact us form as all fields are required', function () {

    ContactUs_Page.setFirstName('Sarah');
    ContactUs_Page.setEmailAddress('sarah_joness@mail.com');
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmUnSuccessfulSubmission();


  });
  */

  it.only("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUs_Page.setFirstName("Tom");
    ContactUs_Page.setEmailAddress("Tom@mail.com");
    ContactUs_Page.clickSubmit();

    try {
      expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string(
        "Error: all fields are required"
      );
    } catch (error) {
      console.log("Exception " + err);
      assert.fail();
    }
  });
});
