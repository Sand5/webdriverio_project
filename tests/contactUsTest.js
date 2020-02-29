
var request =  require('sync-request');
browser.addCommand("submitContactFormData", function( firstName,lastName,emailAddress,comments){

    if(firstName) {
        browser.setValue("[name='first_name']",firstName);
    }
    if(lastName) {
        browser.setValue("[name='last_name']",lastName);
    }

    if(emailAddress) {
        browser.setValue("[name ='email']",emailAddress);
    }
    if(comments) {
        browser.setValue("[name ='message']",comments);
    }
    browser.submit("[type='submit']");
    
})


beforeEach(function() {
    browser.url('/Contact-Us/contactus.html')
})

describe('Test Contact us form WebdriverUni',function(){
    var res = request('GET','http://jsonplaceholder.typicode.com/post/1/comments');
    var contectusDetails = JSON.parse(res.getBody().toString('utf8'));

    beforeEach(function(){
        console.log('Inside the describe block!');
    })

    contectusDetails.forEach(function(contactDetail) {
    it.only('Should be able to submit a successful submission via contact us form', function(){

        browser.submitContactFormData('Joe','Blogs','joeblogs@mail.com','Hello this is some data');
        //browser.setValue("[name='first_name']",'Joe');
        //browser.setValue("[name='last_name']",'Blogs');
        //browser.setValue("[name ='email']",contactDetail.email);
        //browser.setValue("[name ='message']",contactDetail.body);
       // browser.click("[type ='submit']");
        
    });
      
    });
    
     it('Should not be  able to submit a successful submission via contact us form as all fields are required', function(){
        browser.setValue("[name='first_name']",'Mike');
        browser.setValue("[name='last_name']",'Jones');
        browser.setValue("[name ='email']",'mike_joness@mail.com');
        browser.click("[type ='submit']");

    });
      
      
    it('Should not be  able to submit a successful submission via contact us form as all fields are required', function(){

        browser.setValue("[name='first_name']",'Sarah');
         browser.setValue("[name ='email']",'joe_blogs@mail.com');
         browser.click("[type ='submit']");


    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function(){

        browser.setValue("[name='first_name']",'Jim');
        browser.click("[type ='submit']");

    }) ;

});