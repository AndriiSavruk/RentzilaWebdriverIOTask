import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/main.page.ts'
import ProductsPage from '../pageobjects/products.page.ts'
import UnitPage from '../pageobjects/unit.page.ts'

describe('Test cases', () => {
    it('Test-case #C212 Checking "Послуги" section on the main page', async () => {
        // Preconditions
        await browser.reloadSession();
        await browser.url('');
        await browser.maximizeWindow();
        // Step 1  Scroll to the ""Послуги"" section and check if the ""Популярні"" tab and 7 services 
        // below the ""Послуги"" label are displayed.
        await MainPage.servicesBlock.scrollIntoView();
        await expect(MainPage.servicesPopularTitle).toBeDisplayed();
        await expect(MainPage.servicesPopularTitle).toHaveElementClassContaining('RentzilaProposes_selected__4gDR');
        await expect(MainPage.servicesBlockList).toHaveChildren(7);
        // Step 5 Repeat test case for all other services on all tabs below the ""Послуги"" label.
        for (let i=1; i<=7; i++) {
        // Step 2 Click on the first service below the ""Послуги"" label.
        let serviceName:string;
        serviceName = await MainPage.getNameOfServiceItem(i);
        await MainPage.clickOnServicesItem(i);
        await expect(browser).toHaveUrlContaining('products');
        await expect(ProductsPage.choosenFilters).toHaveTextContaining(serviceName);
        await expect(ProductsPage.unitsBlock).toBeDisplayed();
        // Step 3 Click on the first relevant unit.
        await ProductsPage.clickOnUnitBlock(1);
        await expect(browser).toHaveUrlContaining('unit');
        await expect(UnitPage.servicesBlock).toHaveTextContaining(serviceName);
        // Step 4 Click on the logo in the left corner of the page.
        // await browser.pause(3000);
        await UnitPage.clickOnLogo();
        await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/');
        }
        
    })

    it.skip('Test-case#C213 Checking ""Спецтехніка"" section on the main page', async () => {
         // Preconditions
         await browser.reloadSession();
         await browser.url('');
         await browser.maximizeWindow();
         // Step 1 Scroll down to the ""Спецтехніка"" section on the main page and check if 
         // the ""Популярна"" tab and 7 services below the ""Спецтехніка"" label are displayed.
         await MainPage.specialEquipmentBlock.scrollIntoView();
         await expect(MainPage.specialEquipmentPopularTitle).toBeDisplayed();
         await expect(MainPage.specialEquipmentPopularTitle).toHaveElementClassContaining('RentzilaProposes_selected__4gDR');
         await expect(MainPage.specialEquipmentBlockList).toHaveChildren(7);
         // Step 5 Repeat test case for all other elements on all tabs below the ""Спецтехніка"" label.
         for (let i=1; i<=7; i++) {
        // Step 2 Click on the first element in the ""Спецтехніка"" list.
        // let specialEquipmentName:string;
        // specialEquipmentName = await MainPage.getNameOfSpecialEquipmentItem(i);
        await MainPage.clickOnSpecialEquipmentItem(i);
        await expect(browser).toHaveUrlContaining('products');
        await expect(ProductsPage.anotherCheckBox).toBeChecked();
        await expect(ProductsPage.unitsBlock).toBeDisplayed();
        // Step 3 Click on the first relevant unit.
        await ProductsPage.clickOnUnitBlock(1);
        await expect(browser).toHaveUrlContaining('unit');
        // await expect(UnitPage.servicesBlock).toHaveTextContaining(specialEquipmentName);
        // Step 4 Click on the logo in the left corner of the page.
        await UnitPage.clickOnLogo();
        await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/');
         }
    })
})
