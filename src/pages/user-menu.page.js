import BasePage from './base.page';

export default class UserMenuPage extends BasePage {
    constructor(page) {
        super(page);

        this.userMenuLinks = '[data-testid="user-menu-links"]';
        this.userMenuLinkSettings = '[data-testid="user-menu-link-settings"]';
    }
}
