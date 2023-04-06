export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url, path) {
        await this.page.goto(url + path);
    }
