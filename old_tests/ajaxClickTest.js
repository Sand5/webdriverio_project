beforeEach(async () => {
    await browser.url('/Ajax-Loader/index.html');
})


describe('Test that the button is clickable once the Ajax loader completes loading', () => {
    it('Attempts to click on the button asap', () => {
        //browser.url('/Ajax-Loader/index.html')
        const elem = $('#button1');
        elem.click(); L


    });

    it.only('Attempts to click the button after 7 seconds', () => {
        //await  browser.url('/Ajax-Loader/index.html')
        //this.timeout(30000);
        browser.pause(7000);
        const elem = $('#button1');
        elem.click();

    });

});
