import BasePage from './base.page';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.emailField = '#email_login';
        this.passwordField = '#password';
        this.submitBtn = '[data-testid = "login-button-submit"]';
    }

    async enterEmail(email) {
        await this.page.fill(this.emailField, email);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordField, password);
    }

    async clickSubmitButton() {
        await this.page.click(this.submitBtn);
    }

    async signIn(email, password) {
        await this.enterUsername(email);
        await this.enterPassword(password);
        await this.clickSubmitButton();
    }
}
