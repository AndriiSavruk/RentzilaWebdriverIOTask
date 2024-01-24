import { $ } from '@wdio/globals'

export default class MainPage {

    public get servicesBlock () {
        return $('section[data-testid="services"]');
    }
    public get servicesBlockList () {
        return $('.RentzilaProposes_proposes_list__X8dRW');
    }
    public get servicesPopularTitle () {
        return $('div[data-testid="services__populyarni"]');
    }
     
    public async clickOnServicesItem (i:number) {
        (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).click();
    }
    public async getNameOfServiceItem (i:number) {
        return (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).getText(); 
    }
}