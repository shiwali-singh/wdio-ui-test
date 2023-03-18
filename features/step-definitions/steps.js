const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const myntra = require('../pageobjects/myntraTshirt.js');

const assert = require('assert');
const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given('I go to Myntra Landing Page', async ()=> {
    let currentURL, launchedURL; 
    launchedURL = 'https://www.myntra.com/men-tshirts';
    await browser.maximizeWindow();
    await browser.url(launchedURL);

    currentURL  = await browser.getUrl();

    assert.equal(currentURL, launchedURL);

});

// Then('I select Mens->T-shirt from menu', ()=> {

//     myntra.gotoTshirtPAge();
// });

Then('I search for branch {string} in left side filter', async (brand)=> {
    await myntra.searchBrand(brand);
});

Given('I have list of all t-shirts with price and links', async ()=> {
    await myntra.getProductPrice();
});

Then('I get discounted product price and percentage', ()=> {

});

Then('I print in the discounted price from more to less', ()=> {

});
