// test/specs/webview.spec.js
const WebviewPage = require('../pageobjects/WebviewPage');

describe('Native Demo App - WebviewPage', () => {
    it('Navegar até o menu de Webview', async () => {
        await WebviewPage.webview();
    });

});