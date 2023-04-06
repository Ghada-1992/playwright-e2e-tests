import BasePage from './base.page';

export default class MyAccountPage extends BasePage {
    constructor(page) {
        super(page);

        this.editAvatar = '[data-testid="account-edit-field-avatar"]';
    }
}
