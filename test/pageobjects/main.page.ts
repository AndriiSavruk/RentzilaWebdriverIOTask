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
    public get footer () {
        return $('//*[@id="__next"]/div[3]/div');
    }
    public get footerLogo () {
        return $('div[data-testid="logo"]');
    }
    public get aboutUsLabel () {
        return $('div[data-testid="content"]');
    }
    public get politicConfLink () {
        return $('div[data-testid="politika-konfidenciinosti"]');
    }
    public get cookieUsingRulesLink () {
        return $('div[data-testid="pravila-vikoristannya-failiv-cookie"]');
    }
    public get accessAndUsingTermsLink () {
        return $('div[data-testid="umovi-dostupu-ta-koristuvannya"]');
    }
    public get forUsersLabel () {
        return $('//*[@id="__next"]/div[3]/div/div[1]/div[2]/div[1]');
    }
    public get announceLink () {
        return $('div[data-testid="ogoloshennya"]');
    }
    public get tendersLink () {
        return $('div[data-testid="tenderi"]');
    }
    public get contactsLabel () {
        return $('//*[@id="__next"]/div[3]/div/div[1]/div[3]/div[1]');
    }
    public get telegramCloseX () {
        return $('div[data-testid="crossButton"]');
    }
    public get allRigthsProtectedLabel () {
        return $('div[data-testid="copyright"]');
    }
    public serviceSearchSpecTechTitle () {
        return $('//*[@id="__next"]/div[3]/main/div[1]/div/div[1]');
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
    public async clickOnTelegramClose () {
        (await this.telegramCloseX).click();
    }
    public async clickOnPoliticsConfLink () {
        (await this.politicConfLink).click();
    }
    public async clickOnCookieUsingRules () {
        (await this.cookieUsingRulesLink).click();
    }
    public async clickOnAccessAndUsingTermsLink () {
        (await this.accessAndUsingTermsLink).click();
    }
    public async clickOnAnnounceLink () {
        (await this.announceLink).click();
    }
}

export default new MainPage();