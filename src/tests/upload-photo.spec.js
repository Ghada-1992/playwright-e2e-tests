import { expect } from '@playwright/test';

import BasePage from '../pages/base.page';
import LoginPage from '../pages/login.page';

describe('Photo upload tests', () => {
    let context, page, basePage, loginPage;

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
    });

    afterEach(async () => {
        await context.close();
    });

    it('Should upload a profile photo after signing-in with correct credentials', async () => {
        await basePage.navigate("https://www.welcometothejungle.com/fr/me/settings/account");
        await loginPage.enterEmail("qaautomationapplicant@gmail.com");
        await loginPage.enterPassword("o5N,d5ZR@R7^");
        await loginPage.clickSubmitButton();
    });
});
