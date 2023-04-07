import BasePage from './base.page';

export default class MyAccountPage extends BasePage {
    constructor(page) {
        super(page);

        this.avatarInputFile = '#avatar input[type="file"]';
    }
}
