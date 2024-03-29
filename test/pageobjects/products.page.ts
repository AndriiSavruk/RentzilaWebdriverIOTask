import { $ } from '@wdio/globals'

class ProductsPage {

    public get choosenFilters () {
        return $('.ResetFilters_container__z_pVr');
    }
    public get unitsBlock () {
        return $('//*[@id="__next"]/div/main/div/div/div[3]');
    }
    public get anotherCheckBox () {
        return $('#serviceCategory-4');
    }
    public get searchInput () {
        return $('input[data-testid="searchInput"]');
    }
    public get logo () {
        return $('div[data-testid="logo"]');
    }
    public get unitsBlockTitle () {
        return $('//*[@id="__next"]/div/main/div/div/div[3]/div[1]/h1');
    }

    public async clickOnUnitBlock (i:number) {
        (await $('//*[@id="__next"]/div/main/div/div/div[3]/div[3]/a/div['+i+']/span/img')).click();
    }
    public async clickOnLogo () {
        (await this.logo).click();
    }
}

export default new ProductsPage();