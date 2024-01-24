import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/main.page.ts'
import ProductsPage from '../pageobjects/products.page.ts'
import UnitPage from '../pageobjects/unit.page.ts'

let mainPage: MainPage;
let productsPage: ProductsPage;
let unitPage: UnitPage;
mainPage = new MainPage();
productsPage = new ProductsPage();
unitPage = new UnitPage();

describe('Test cases', () => {
    it('Test-case #C212 Checking "Послуги" section on the main page', async () => {
        // Preconditions
        await browser.reloadSession();
        await browser.url('');
        await browser.maximizeWindow();
        // Step 1  Scroll to the ""Послуги"" section and check if the ""Популярні"" tab and 7 services 
        // below the ""Послуги"" label are displayed.
        await mainPage.servicesBlock.scrollIntoView();
        await expect(mainPage.servicesPopularTitle).toBeDisplayed();
        await expect(mainPage.servicesPopularTitle).toHaveElementClassContaining('RentzilaProposes_selected__4gDR');
        await expect(mainPage.servicesBlockList).toHaveChildren(7);
        // Step 5 Repeat test case for all other services on all tabs below the ""Послуги"" label.
        for (let i=1; i<=7; i++) {
        // Step 2 Click on the first service below the ""Послуги"" label.
        let serviceName:string;
        serviceName = await mainPage.getNameOfServiceItem(i);
        await mainPage.clickOnServicesItem(i);
        await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/products/');
        await expect(productsPage.choosenFilters).toHaveTextContaining(serviceName);
        await expect(productsPage.unitsBlock).toBeDisplayed();
        // Step 3 Click on the first relevant unit.
        await productsPage.clickOnUnitBlock(1);
        await expect(browser).toHaveUrlContaining('unit');
        await expect(unitPage.servicesBlock).toHaveTextContaining(serviceName);
        // Step 4 Click on the logo in the left corner of the page.
        // await browser.pause(3000);
        await unitPage.clickOnLogo();
        await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/');
        }
        
    })
})
