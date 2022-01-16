const welcomePage = require("D:\\Wdio-Javascript\\pages\\welcomepageElements.js");
describe('Verify the volvo homepgae', () => {
    it('launch the application url and verify the tittle and url',() => {

        browser.url('/');
        browser.pause(3000);
        expect(browser).toHaveUrl('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        expect(browser).toHaveTitle('Ideas that change the world are often the most controversial.')
        browser.acceptAlert();
        
    });
    it('header text verification',function(){
       
       const headerText = welcomePage.pageHeader.getText()
       const element = welcomePage.pageHeader
       element.waitForExist();
       expect(headerText).toHaveText('Ideas that change the world are often the most controversial.')
    
    });
    it('click on menu button',function(){
        browser.pause(3000);
        const menubutton = welcomePage.menuButton
        menubutton.waitForExist();
        menubutton.click();
    
    })
    it('verify the menu list',function(){
        const menulist = welcomePage.menuList
        menulist.waitForExist();

        menulist.each(($e1,$index,$list)=>{
         var result = $e1.getText();
         result= result[1].trim();
        }).then(function(){
         console.log(result);
        })
        const menuCloseButton = welcomePage.menuCloseButton
        menuCloseButton.click();
    })
    it('Click on our cars button',function(){

        const ourCarsButton = welcomePage.ourCarsButton
        ourCarsButton.click();
    })
    it('Verify the XC90 recharge in th menu',function(){
        const carslist = welcomePage.carslist
        carslist.each(($e1,index,list)=>{
         const carname = $e1.getText();
         if(carname.includes('XC60 Recharge')){
            carslist.then(function(result){
                const actualName = result.getText()
                expect(actualName).toEqual("XC60 Recharge")

            })

         }

        })

    })
});

