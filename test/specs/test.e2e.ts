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

    it('Test-case#214  Verify that all elements on the footer are displayed and all links are clickable', async () => {
        // Preconditions
        await browser.reloadSession();
        await browser.url('');
        await browser.maximizeWindow();
        // Step 1  Scroll down to the footer.
        await MainPage.footer.scrollIntoView();
        await MainPage.clickOnTelegramClose();
        await expect(MainPage.footer).toBeDisplayed();
        await expect(MainPage.footerLogo).not.toBeClickable();
        // Step 2  Check that ""Про нас"" label is displayed on the footer.
        await expect(MainPage.aboutUsLabel).toBeDisplayed();
        // Step 3 Check that ""Політика конфіденційності"" link is displayed on the footer.
        await expect(MainPage.politicConfLink).toBeDisplayed();
        // Step 4 Check that ""Правила використання файлів cookie"" link is displayed on the footer.
        await expect(MainPage.cookieUsingRulesLink).toBeDisplayed();
        // Step 5 Check that ""Умови доступу та користування"" link is displayed on the footer.
        await expect(MainPage.accessAndUsingTermsLink).toBeDisplayed();
        // Step 6 Check that ""Користувачам"" label is displayed on the footer.
        await expect(MainPage.forUsersLabel).toBeDisplayed();
        // Step 7 Check that ""Оголошення"" link is displayed on the footer.
        await expect(MainPage.announceLink).toBeDisplayed();
        // Step 8 Check that ""Тендери"" link is displayed on the footer.
        await expect(MainPage.tendersLink).toBeDisplayed();
        // Step 9 Check that the ""Контакти"" label and email are displayed on the footer.
        await expect(MainPage.contactsLabel).toBeDisplayed();
        // Step 10 Check that the Rentzila logo is displayed on the footer.
        await expect(MainPage.footerLogo).toBeDisplayed();
        // Step 11 Check that the ""Усі права захищені"" label is displayed on the footer.
        await expect(MainPage.allRigthsProtectedLabel).toBeDisplayed();
        // Step 12 Click the ""Політика конфіденційності"" link on the footer.
        await MainPage.clickOnPoliticsConfLink();
        await expect(browser).toHaveUrlContaining('privacy-policy');
        await expect(browser).toHaveTitleContaining('Політика конфіденційності');
        await browser.back()
        // Step 13 Scroll down to the footer and click the ""Правила використання файлів cookie"" link  on the footer.
        await MainPage.footer.scrollIntoView();
        await MainPage.clickOnCookieUsingRules();
        await expect(browser).toHaveUrlContaining('cookie-policy');
        await expect(browser).toHaveTitleContaining('Політика використання cookie');
        await browser.back();
        // Step 14 Scroll down to the footer and click the ""Умови доступу та користування"" link on the footer.
        await MainPage.footer.scrollIntoView();
        await MainPage.clickOnAccessAndUsingTermsLink();
        await expect(browser).toHaveUrlContaining('terms-conditions');
        await expect(browser).toHaveTitleContaining('Угода користувача');
        await browser.back();
        // Step 15 Scroll down to the footer and click on the ""Оголошення"" link.
        await MainPage.footer.scrollIntoView();
        await MainPage.clickOnAnnounceLink();
        await expect(browser).toHaveUrlContaining('products');
        await expect(ProductsPage.searchInput).toBeDisplayed();
        await expect(ProductsPage.searchInput).toHaveAttr('placeholder', 'Пошук оголошень або послуг');
        // Step 16  Click the Rentzila logo on the header.
        // await ProductsPage.clickOnLogo();
        // await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/');
        // await expect(MainPage.serviceSearchSpecTechTitle).toBeDisplayed();

    })
})
