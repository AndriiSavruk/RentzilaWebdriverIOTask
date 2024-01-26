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
        return $('//*[@id="__next"]/div[3]/div/div[1]/div[2]/div[2]/div[2]/a');
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
    public get serviceSearchSpecTechTitle () {
        return $('//*[@id="__next"]/div[3]/main/div[1]/div/div[1]/h1');
    }
    public get emailLink () {
        return $('//*[@id="__next"]/div[3]/div/div[1]/div[3]/div[2]/div/a');
    }
    public get searchInput () {
        return $('input[data-testid="searchInput"]');
    }
    public get searchPopUp () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div');
    }
    public get popUpServices () {
        return $('div[data-testid="services"]');
    }
    public get popUpCategories () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[1]/div[3]');
    }
    public get searchResult () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[1]/div[1]')
    }
    public get popUpSearchResultBlock () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[2]')
    }
    public get popUpServicesAsphalting () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[1]/div[2]/div[2]');
    }
    public get popUpCategorieDragline () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[1]/div[3]/div[1]')
    }
    public get searchClearBtn () {
        return $('div[data-testid="searchClear"]');
    }
    public get questionsForm () {
        return $('//*[@id="__next"]/div[3]/section');
    }
    public get orderConsultBtn () {
        return $('//*[@id="__next"]/div[3]/section/div/form/div[3]/button');
    }
    public get nameFormFieldErrorMessage () {
        return $('//*[@id="__next"]/div[3]/section/div/form/div[1]/p');
    }
    public get phoneFormFieldErrorMessage () {
        return $('//*[@id="__next"]/div[3]/section/div/form/div[2]/p');
    }
    public get inputNameFormField () {
        return $('//*[@id="__next"]/div[3]/section/div/form/div[1]/input');
    }
    public get inputPhoneFormField () {
        return $('//*[@id="mobile"]');
    }
    public get phoneFormFieldNoValidErrorMessage () {
        return $('//*[@id="__next"]/div[3]/section/div/form/div[2]/p');
    }
    public get catalogLink () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[2]')
    }
    public get specTechniqLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[1]/div[1]');
    }
    public get servicesLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[1]/div[2]');
    }
    public get buildTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[2]/div[1]');
    }
    public get utilityTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[2]/div[2]')
    }
    public get agricultTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[2]/div[3]')
    }
    public get storeTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[2]/div[4]')
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
    public async clickOnTendersLink () {
       (await this.tendersLink).click();
    }
    public async clickOnSearchInput () {
        (await this.searchInput).click();
    }
    public async setValueInSearchInput (a:string) {
        (await this.searchInput).setValue(a);
    }
    public async clickOnSerchResult (i:number) {
        (await $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[2]/div/div['+i+']')).click();
    }
    public async clickOnAsphaltingService () {
        (await this.popUpServicesAsphalting).click();
    }
    public async clickOnDraglineCategorie () {
        (await this.popUpCategorieDragline).click();
    }
    public async clickOnSearchClearBtn () {
        (await this.searchClearBtn).click();
    }
    public async clickOnOrderConsultBtn () {
        (await this.orderConsultBtn).click();
    }
    public async setValueInNameFormField (a:string) {
        (await this.inputNameFormField).setValue(a);
    }
    public async clickOnInputPhoneFormField () {
        (await this.inputPhoneFormField).click();
    }
    public async addValueInPhoneFormField (i:number) {
        (await this.inputPhoneFormField).addValue(i);
    }
    public async setValueInPhoneFormField (a:string) {
        (await this.inputPhoneFormField).setValue(a);
    }
    public async clickOnCatalogLink () {
        (await this.catalogLink).click();
    }
    public async hoverSpecTechLabel () {
        (await this.specTechniqLabel).moveTo();
    }
    public async clickOnBuildTechLabel () {
        (await this.buildTechLabel).click();
    }
    public async clickOnUtilTechLabel () {
        (await this.utilityTechLabel).click();
    }
    public async clickOnAgricultTechLabel () {
        (await this.agricultTechLabel).click();
    }
    public async clickOnStoreTechLabel () {
        (await this.storeTechLabel).click();
    }
}

export default new MainPage();