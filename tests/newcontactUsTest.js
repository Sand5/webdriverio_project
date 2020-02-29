var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");


beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact us form WebdriverUni', function () {



  it('Should be able to submit a successful submission via contact us form', function () {

    ContactUs_Page.submitAllInformationViaContactUsForm('Joe','Blogs','JoeBlogs@gmail.com', 'How are you?');
    /*
    ContactUs_Page.setFirstName('Joe');
    ContactUs_Page.setLastName('Blogs');
    ContactUs_Page.setEmailAddress('JoeBlogs@mail.com');
    ContactUs_Page.setComments('This is a new comment');
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmSuccessfulSubmission();
    */
  });



  it.skip('Should not be  able to submit a successful submission via contact us form as all fields are required', function () {
    ContactUs_Page.setFirstName('Mike');
    ContactUs_Page.setLastName('Woods');
    ContactUs_Page.setEmailAddress('mike_joness@mail.com');
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmUnSuccessfulSubmission();


  });


  it.skip('Should not be  able to submit a successful submission via contact us form as all fields are required', function () {

    ContactUs_Page.setFirstName('Sarah');
    ContactUs_Page.setEmailAddress('sarah_joness@mail.com');
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmUnSuccessfulSubmission();


  });

  it.skip('Should not be able to submit a successful submission via contact us form as all fields are required', function () {
    ContactUs_Page.setFirstName('Tom');
    ContactUs_Page.setEmailAddress('Tom@mail.com');
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmUnSuccessfulSubmission();
  });
});    