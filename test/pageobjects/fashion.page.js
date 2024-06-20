const find = require('appium-flutter-finder');
const assert = require('assert');

class fashionSite {

    async clickGetStartedButton(){
        const button = find.byText('Get Started')
        assert.strictEqual(await driver.getElementText(find.byText('Get Started')), 'Get Started')
        await driver.elementClick(button)

    }

    async clickProduct(){
        await driver.execute('flutter:waitFor', find.byText('Second shirt'))
        await driver.elementClick(find.byText('Second shirt'))
        assert.strictEqual(await driver.getElementText(find.byText('$35')), '$35')
    }

}

module.exports = new fashionSite();


// describe('Flutter Test Application', () => {

//     it('Click Get Started and Search', async () => {
        
//         const button = find.byText('Get Started')
//         assert.strictEqual(await driver.getElementText(find.byText('Get Started')), 'Get Started')
//         await driver.elementClick(button)
        // await driver.execute('flutter:waitFor', find.byText('Second shirt'))
        // await driver.elementClick(find.byText('Second shirt'))
        // assert.strictEqual(await driver.getElementText(find.byText('$35')), '$35')
//     });
// });