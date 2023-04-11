export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async uploadFile(selector, filePath) {
        return await this.page.setInputFiles(selector, filePath);
    }
}
