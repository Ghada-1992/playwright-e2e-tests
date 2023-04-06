export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url, path) {
        await this.page.goto(url + path);
    }

    async uploadFile(selector, filePath) {
        const inputElement = await this.page.$(selector);
        await inputElement.setInputFiles(filePath);
    }
