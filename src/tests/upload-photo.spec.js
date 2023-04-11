import { expect } from '@playwright/test';

import BasePage from '../pages/base.page';
import LoginPage from '../pages/login.page';
import UserMenuPage from '../pages/user-menu.page';
import MyAccountPage from '../pages/my-account.page';
import NotificationsPage from '../pages/notifications.page';

describe('Photo upload tests', () => {
    let context, page, basePage, loginPage, userMenuPage, myAccountPage, notificationsPage;

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
        userMenuPage = new UserMenuPage(page);
        myAccountPage = new MyAccountPage(page);
        notificationsPage = new NotificationsPage(page);
    });

    afterEach(async () => {
        //await context.close();
    });

    it('Should upload a profile photo after signing-in with correct credentials', async () => {
        // Sign in with valid credentials
        await basePage.navigate('https://www.welcometothejungle.com/fr/me/settings/account');
        await loginPage.enterEmail('inqom.qaautomationapplicant@gmail.com');
        await loginPage.enterPassword('o5N,d5ZR@R7^');
        await loginPage.clickSubmitButton();
        await expect(page.locator(userMenuPage.userMenuLinks)).toBeVisible();
        await expect(page.locator(userMenuPage.userMenuLinkSettings)).toHaveAttribute('aria-selected', 'true');

        // Upload a photo
        await basePage.uploadFile(myAccountPage.avatarInputFile, 'profile-photo.png');
        // Wait for the uploaded image to be displayed on the page
        await page.waitForSelector('img[src^="blob:"]');

        // Submit my account edition form
        await myAccountPage.clickEditAccountSubmitBtn();
        await expect(page.locator(notificationsPage.statusNotification)).toBeVisible();
        await expect(page.locator(notificationsPage.statusNotification)).toHaveText(
            'Mise à jour réussie !Vos informations personnelles ont bien été mises à jour.'
        );
    });
});
