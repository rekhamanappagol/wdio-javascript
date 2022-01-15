describe('My Login application', () => {
    it('launch the application url and verify the tittle and url', async () => {

        browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
        browser.pause(3000);
        expect(browser).toHaveUrl('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        expect(browser).toHaveTitle('Ideas that change the world are often the most controversial.')
        browser.acceptAlert();
        
    });
    it('header verification',()=>{
        browser.pause(3000);
       const header = $('#ModelIntro-1 h2')
    console.log("Header is : " + header.getText())

    const ourCars = $('//button[@id="nav:topNavCarMenu"]//em')
    console.log(ourCars.getText())
    })
});

