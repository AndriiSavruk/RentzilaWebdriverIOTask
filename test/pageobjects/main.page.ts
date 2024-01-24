import { $ } from '@wdio/globals';
// import Page from './page';

// const servicesBlocklok = 'section[data-testid="services"]'

// class MainPage extends Page {
    class MainPage {

    public get servicesBlock () {
        return $('section[data-testid="services"]');
    }
    // public get servicesBlock () {
    //     return super.getElement(servicesBlocklok);
    //     }
        
    public get servicesBlockList () {
        return $('//*[@id="__next"]/div[3]/main/section[1]/div[2]');
    }
    public get servicesPopularTitle () {
        return $('div[data-testid="services__populyarni"]');
    }
    public get specialEquipmentBlock () {
        return $('section[data-testid="specialEquipment"]');
    }
    public get specialEquipmentBlockList () {
        return $('//*[@id="__next"]/div[3]/main/section[2]/div[2]');
    }
    public get specialEquipmentPopularTitle () {
        return $('h3[data-testid="specialEquipment__populyarna"]');
    }
    public async clickOnServicesItem (i:number) {
        (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).click();
    }
    public async getNameOfServiceItem (i:number) {
        return (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).getText(); 
    }
    public async clickOnSpecialEquipmentItem (i:number) {
        (await $('//*[@id="__next"]/div[3]/main/section[2]/div[2]/div[1]/div['+i+']')).click();
    }
    public async getNameOfSpecialEquipmentItem (i:number) {
        return (await $('//*[@id="__next"]/div[3]/main/section[2]/div[2]/div[1]/div['+i+']')).getText(); 
    }
}

export default new MainPage();