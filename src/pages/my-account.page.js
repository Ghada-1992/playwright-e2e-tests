import BasePage from './base.page';

export default class MyAccountPage extends BasePage {
    constructor(page) {
        super(page);

        this.avatarInputFile = '#avatar input[type="file"]';
        this.editAvatarBtn = 'button [alt="Edit"]';
        this.editAccountSubmitBtn = '[data-testid="account-edit-button-submit"]';
    }

    async clickEditAccountSubmitBtn() {
        await this.page.click(this.editAccountSubmitBtn);
    }
}
