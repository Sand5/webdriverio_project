describe('Test that the button is clickable once the Ajax loader completes loading',function() {
    it.skip('Attempts to click on the button asap',function() {
        browser.url('/Ajax-Loader/index.html')
        browser.click('#button1');
  
    });

    it.only('Attempts to click the button after 7 seconds',function() {
        browser.url('/Ajax-Loader/index.html')
        this.timeout(30000);
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
  
    });
    
});

