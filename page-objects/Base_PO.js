export default class Base_PO {
  
   async  open(path){
  return browser.url(path);
  }

  waitUsingFixTimeout(time) {
      console.log("Pausing for: " +time + "seconds");
       browser.pause(time);
       
  }
  
}
