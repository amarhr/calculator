describe('Protractor Demo App', function() {

    beforeEach(function(){
        browser.driver.manage().window().maximize();
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    afterEach(function(){
        console.log('After each executed');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
    it('Add two numbers', function() {
        element(by.model('operator')).$('[value="ADDITION"]').click();
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('2');

        element(by.buttonText('Go!')).click();

        element(by.xpath('//h2[@class=\'ng-binding\']')).getText().then(function(text){
            console.log("The sum of two numbers is: " + text);
        });
        expect(element(by.xpath('//h2[@class=\'ng-binding\']')).getText()).toContain("4");
    });

    it('Substract two numbers', function() {
        element(by.model('operator')).$('[value="SUBTRACTION"]').click();
        element(by.model('first')).sendKeys('10');
        element(by.model('second')).sendKeys('2');

        element.all(by.css("select>option")).then(function(itemList){
            expect(itemList.length).toBe(5);
            console.log("Drop down has " + itemList.length + " items");
            expect(itemList[0].getText()).toBe("+");
            expect(itemList[1].getText()).toBe("/");
            expect(itemList[2].getText()).toBe("%");
            expect(itemList[3].getText()).toBe("*");
            expect(itemList[4].getText()).toBe("-");
        });

        element(by.buttonText('Go!')).click();

        element(by.xpath('//h2[@class=\'ng-binding\']')).getText().then(function(text){
            console.log("The difference of two numbers is: " + text);
        });
        expect(element(by.xpath('//h2[@class=\'ng-binding\']')).getText()).toContain("8");
    });
});