import BasePage from './base.page';

export default class NotificationsPage extends BasePage {
    constructor(page) {
        super(page);

        this.statusNotification = '(//*[@role="status"])[1]';
    }
}
