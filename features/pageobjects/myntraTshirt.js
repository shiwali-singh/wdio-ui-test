const assert = require('assert');

class myntraTshirtPrices {

    get menButtonSelector() {
        return $('(//a[@data-group="men"])[1]');
    }

    get searchbar() {
        return $('//span[normalize-space(text())="Brand"]/ancestor::div/div/input');
    }

    get searchIcon() {
        return $('//span[normalize-space(text())="Brand"]/ancestor::div/div[@class="filter-search-filterSearchBox"]');
    }

    get selectedbrand() {
        return $('//ul[@class="brand-list"]')
    }

    get branchCheckbox() {
        return $('//input[@value="Van Heusen"]//ancestor::label//div');
    }

    get filterSlug() {
        return $('//div[@class="filter-summary-filter"]');
    }

    get productPrice() {
        return $$('//div[@class="product-price"]/span');
    }

    get productLink() {
        return $$('//li[@class="product-base"]/a');
    }

    get discountedTshirt() {
        return $$('//span[@class="product-discountPercentage"]');
    }

    async searchBrand(brand) {
        let slugText;

        await (await this.searchIcon).click();
        await (await this.searchbar).setValue(brand)

        await (await this.branchCheckbox).waitForClickable();
        await (await this.branchCheckbox).click();

        slugText = await (await this.filterSlug).getText();

        assert.equal((slugText).toLowerCase, (brand).toLowerCase);
    }

    async getProductPrice() {
        let price, originalPrice, len, links, discountedPrice, priceArr = [], linksArr = [], discountedPriceArr = [];

        len = await this.productPrice.length;
        for (let i = 0; i < len; i++) {
            price = await (await this.productPrice[i]).getText();


            originalPrice = price.split('.')[1];
            priceArr.push(originalPrice);



            // links = await (await this.productLink[i]).getAttribute('href');
            // linksArr.push(links);

          //  discountedPrice = await (await this.discountedTshirt[i]).getText();
          //  discountedPriceArr.push(discountedPrice);

        }
        console.log(priceArr);
        console.log(discountedPriceArr);
        console.log(linksArr);

    }


}

module.exports = new myntraTshirtPrices();