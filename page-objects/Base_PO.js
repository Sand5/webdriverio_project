export default class Base_PO {
  
    open(path) {
    browser.url(path);
  }

  waitUsingFixTimeout(time) {
      console.log("Pausing for: " +time + "seconds");
       browser.pause(time);
  }
  
}
