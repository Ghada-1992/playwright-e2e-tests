import { expect } from '@playwright/test';

import BasePage from '../pages/base.page';
import LoginPage from '../pages/login.page';
import UserMenuPage from '../pages/user-menu.page';
import MyAccountPage from '../pages/my-account.page';

describe('Photo upload tests', () => {
    let context, page, basePage, loginPage, userMenuPage, myAccountPage;

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
        userMenuPage = new UserMenuPage(page);
        myAccountPage = new MyAccountPage(page);
    });

    afterEach(async () => {
        //await context.close();
    });

    it('Should upload a profile photo after signing-in with correct credentials', async () => {
        await basePage.navigate('https://www.welcometothejungle.com/fr/me/settings/account');
        await loginPage.enterEmail('inqom.qaautomationapplicant@gmail.com');
        await loginPage.enterPassword('o5N,d5ZR@R7^');
        await loginPage.clickSubmitButton();
        await expect(page.locator(userMenuPage.userMenuLinks)).toBeVisible();
        await expect(page.locator(userMenuPage.userMenuLinkSettings)).toHaveAttribute('aria-selected', 'true');

        await basePage.uploadFile(myAccountPage.avatarInputFile, 'profile-photo.png');
    });
});
