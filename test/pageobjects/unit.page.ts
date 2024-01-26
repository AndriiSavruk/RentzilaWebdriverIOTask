import { $ } from '@wdio/globals'

class UnitPage {

    public get servicesBlock () {
        return $('.UnitCharacteristics_services___vypr');
    }

    public get logo () {
        return $('div[data-testid="logo"]');
    }
    public get unitTitle () {
        return $('//*[@id="__next"]/div[3]/main/div/div[3]/div[2]/div[1]/h1');
    }

    public async clickOnLogo () {
        (await this.logo).click();
    }
}

export default new UnitPage();