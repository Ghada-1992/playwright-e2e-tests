import path from 'path';
import data from '../../resources/test-data.json';
import { my_account_url_path, notifications_my_account_update_text_fr } from '../../resources/constants';
import { resources } from '../../resources/resources-paths';

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
        await context.close();
    });

    it('Should submit the upload of a profile photo', async () => {
        // Sign in to my account page with valid credentials
        await basePage.navigate(data.baseUrl + my_account_url_path);
        await loginPage.enterEmail(data.validCredentials.email);
        await loginPage.enterPassword(data.validCredentials.password);
        await loginPage.clickSubmitButton();
        await expect(page.locator(userMenuPage.userMenuLinks)).toBeVisible();
        await expect(page.locator(userMenuPage.userMenuLinkSettings)).toHaveAttribute('aria-selected', 'true');

        // Upload a photo
        const filePath = path.join(resources, 'profile-photo.png');
        await basePage.uploadFile(myAccountPage.avatarInputFile, filePath);
        // Wait for the uploaded image to be displayed on the page
        await page.waitForSelector('img[src^="blob:"]');

        // Submit my account edition form
        await myAccountPage.clickEditAccountSubmitBtn();
        await expect(page.locator(notificationsPage.statusNotification)).toBeVisible();
        await expect(page.locator(notificationsPage.statusNotification)).toHaveText(
            notifications_my_account_update_text_fr
        );
    });
});
