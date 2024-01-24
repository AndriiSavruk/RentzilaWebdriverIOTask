import { $ } from '@wdio/globals'

class UnitPage {

    public get servicesBlock () {
        return $('.UnitCharacteristics_services___vypr');
    }

    public get logo () {
        return $('div[data-testid="logo"]');
    }

    public async clickOnLogo () {
        (await this.logo).click();
    }
}

export default new UnitPage();