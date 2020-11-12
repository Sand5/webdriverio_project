import Base_PO from "./Base_PO";

class ContactUs_PO extends Base_PO {
  async open() {
   await super.open("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
  }

  get firstName() {
      
    return $("//*[@name='first_name']");
  }
  get lastName() {
    return $("//*[@name='last_name']");
  }

  get emailAddress() {
    return $("//*[@name='email']");
  }

  get comments() {
    return $("textarea");
  }

  get submitButton() {
    return $("[type='submit']");
  }

   submit() {
    return this.submitButton.click();
  }

 get getSuccessfulContactHeader(){
      return $("#contact_reply h1");
  }
}

export default new ContactUs_PO();
