
var request =  require('sync-request');
browser.addCommand("submitContactFormData", function( firstName,lastName,emailAddress,comments){

    browser.set
    if(firstName) {
        //browser.setValue("[name='first_name']",firstName);
        $("[name='first_name']").setValue(firstName);
    }
    if(lastName) {
        //browser.setValue("[name='last_name']",lastName);
        $("[name='last_name']").setValue(lastName);
    }

    if(emailAddress) {
       // browser.setValue("[name ='email']",emailAddress);
       $("[name ='email']").setValue(emailAddress);
    }
    if(comments) {
       // browser.setValue("[name ='message']",comments);
       $("[name ='message']").setValue(comments);
    }
    //browser.click("[type ='submit']");
    $("[type ='submit']").click();
  
});


beforeEach(function() {
    browser.url('/Contact-Us/contactus.html')
})

describe('Test Contact us form WebdriverUni',function(){
    var res = request('GET','http://jsonplaceholder.typicode.com/post/1/comments');
    var contectusDetails = JSON.parse(res.getBody().toString('utf8'));

   // beforeEach(function(){
  //      console.log('Inside the describe block!');
  //  })
    contectusDetails.forEach(function(contactDetail) {
    it('Should be able to submit a successful submission via contact us form', function(){

        browser.submitContactFormData(contactDetail.name,'Blogs',contactDetail.email,contactDetail.body);
        //browser.setValue("[name='first_name']",'Joe');
        //browser.setValue("[name='last_name']",'Blogs');
        //browser.setValue("[name ='email']",contactDetail.email);
        //browser.setValue("[name ='message']",contactDetail.body);
       // browser.click("[type ='submit']");
        
    });
      
    });
    
     it.skip('Should not be  able to submit a successful submission via contact us form as all fields are required', function(){
        browser.setValue("[name='first_name']",'Mike');
        browser.setValue("[name='last_name']",'Jones');
        browser.setValue("[name ='email']",'mike_joness@mail.com');
        browser.click("[type ='submit']");
    

    });
      
      
    it.skip('Should not be  able to submit a successful submission via contact us form as all fields are required', function(){

        browser.setValue("[name='first_name']",'Sarah');
         browser.setValue("[name ='email']",'joe_blogs@mail.com');
         browser.click("[type ='submit']");


    });

    it.skip('Should not be able to submit a successful submission via contact us form as all fields are required', function(){

        browser.setValue("[name='first_name']",'Jim');
        browser.click("[type ='submit']");

    }) ;

});