import { $ } from '@wdio/globals';

    class MainPage {

    public get servicesBlock () {
        return $('section[data-testid="services"]');
    }
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
    public get popUpServicesTitle () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[1]/h6[2]')
    }
    public get popUpCategoriesTitle () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[2]/div[2]/div/div[1]/h6[3]');
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
    public get autoKransLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[1]');
    }
    public get buroviUstLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[2]')
    }
    public get dorBudTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[3]')
    }
    public get excavatorsLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[4]')
    }
    public get anotherBudTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[5]')
    }
    public get catsLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[6]')
    }
    public get containersLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[7]')
    }
    public get navantagLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[8]')
    }
    public get equipForSpecTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[9]')
    }
    public get liftrersLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[10]')
    }
    public get techniqForGroundWorksLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[11]')
    }
    public get headerLogo () {
        return $('//*[@id="__next"]/div[3]/header/div/div[1]/div/div[1]/a/div');
    }
    public get avarMachLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[1]')
    }
    public get dorCleanTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[2]')
    }
    public get cleaningEquipLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[3]')
    }
    public get utilityContainersLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[4]')
    }
    public get utilityMachLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[5]')
    }
    public get EquipUtilTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[6]')
    }
    public get gruntoObrTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[1]')
    }
    public get zatkiLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[2]')
    }
    public get inshaAgrTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[3]')
    }
    public get potatoTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[4]')
    }
    public get combinesLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[5]')
    }
    public get woodKeepTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[6]')
    }
    public get equipLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[7]')
    }
    public get afterCollectLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[8]')
    }
    public get posivAndSadTechLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[9]')
    }
    public get agricultRielLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[10]')
    }
    public get techForInsDobrLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[11]')
    }
    public get techForZagotSinaLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[12]')
    }
    public get techForPolyvZrochLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[13]')
    }
    public get techForGardenLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[14]')
    }
    public get techForAnimalsLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[15]')
    }
    public get techForTranspLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[16]')
    }
    public get tractorsLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[17]')
    }
    public get equipForLiftersLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[1]')
    }
    public get techForStorageLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[2]')
    }
    public get buildingServLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[2]/div[1]')
    }
    public get anotherServLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[2]/div[2]')
    }
    public get agricServLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[2]/div[3]')
    }
    public get roadWorksLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[1]')
    }
    public get cleaningTeritoryLabel () {
        return $('//*[@id="__next"]/div/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[4]')
    }
    public get vnesDobryvLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[3]')
    }
    public get cuttingTreesLabel () {
        return $('//*[@id="__next"]/div[3]/header/div/div[2]/div/div[1]/div/div[3]/div[3]/div[5]')
    }
    public async clickOnServicesItem (i:number) {
        (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).click();
    }
    public async getNameOfServiceItem (i:number) {
        return (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).getText(); 
    }
    public async clickOnSpecialEquipmentItem (i:number) {
        (await $('//*[@id="__next"]/div[3]/main/section[2]/div[2]/div['+i+']/div[1]')).click();
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
    public async clearValueInSearchInput () {
        (await this.searchInput).clearValue();
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
    public async hoverBudTechLabel () {
        (await this.buildTechLabel).moveTo();
    }
    public async clickOnHeaderLogo () {
        (await this.headerLogo).click();
    }
    public async hoverUtilityTechLabel () {
        (await this.utilityTechLabel).moveTo();
    }
    public async hoverAgricultTechLabel () {
        (await this.agricultTechLabel).moveTo();
    }
    public async hoverStoreTechLabel () {
        (await this.storeTechLabel).moveTo();
    }
    public async hoverOnServicesLabel () {
        (await this.servicesLabel).moveTo();
    }
    public async hoverBuildServLabel () {
        (await this.buildingServLabel).moveTo();
    }
    public async clickOnRoadWorksLabel () {
        (await this.roadWorksLabel).click();
    }
    public async clickOnCleaningTeritoryLabel () {
        (await this.cleaningTeritoryLabel).click();
    }
    public async hoverAgricServLabel () {
        (await this.agricServLabel).moveTo();
    }
    public async clickOnVnesDobryvLabel () {
        (await this.vnesDobryvLabel).click();
    }
    public async hoverAnotherServLabel () {
        (await this.anotherServLabel).moveTo();
    }
    public async clickOnCuttingTreesLabel () {
        (await this.cuttingTreesLabel).click();
    }
}

export default new MainPage();