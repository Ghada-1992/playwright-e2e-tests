module.exports = {
    browsers: ['chromium'],
    launchOptions: {
        headless: false,
        slowMo: 500,
        screenshot: 'only-on-failure',
        video: 'on',
        trace: 'retain-on-failure'
    },
    contextOptions: {
        viewport: {
            width: 1920,
            height: 1080
        }
    },
    skipInitialization: false,
    exitOnPageError: false,
    workers: 1
};
