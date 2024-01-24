import { $ } from '@wdio/globals'

export default class ProductsPage {

    public get choosenFilters () {
        return $('.ResetFilters_container__z_pVr');
    }
    public get unitsBlock () {
        return $('//*[@id="__next"]/div/main/div/div/div[3]');
    }

    public async clickOnUnitBlock (i:number) {
        (await $('//*[@id="__next"]/div/main/div/div/div[3]/div[3]/a/div['+i+']/span/img')).click();
    }
}