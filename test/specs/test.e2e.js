const allureReporter = require('@wdio/allure-reporter').default

const FashionScreen = require('../pageobjects/fashion.page')

describe('Flutter Test Application', () => {
    it('Click Get Started and Search', async () => {
        allureReporter.addFeature('Fashion Shop');
        await FashionScreen.clickGetStartedButton();
        await FashionScreen.clickProduct();
    });
});



