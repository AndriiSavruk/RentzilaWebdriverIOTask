import { $ } from '@wdio/globals'

class TendersPage {

    public get searchInput () {
        return $('input[data-testid="search"]');
    }
    public get logo () {
        return $('div[data-testid="logo"]');
    }

    public async clickOnLogo () {
        (await this.logo).click();
    }
}

export default new TendersPage();