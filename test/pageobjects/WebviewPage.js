// test/pageobjects/WebviewPage.js
class WebviewPage {
    get webviewText() { return $('//*[@text="Webview"]'); }
    get webviewMessageText() { return $('//*[@text="Get Started"]'); }

    async webview() {
        await this.webviewText.click();

    }

}

module.exports = new WebviewPage();