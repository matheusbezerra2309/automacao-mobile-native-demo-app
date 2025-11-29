// test/specs/swipe.spec.js
const SwipePage = require('../pageobjects/SwipePage');

describe('Native Demo App - SwipePage', () => {
    it('Navegar até o menu de Swipe', async () => {
        await SwipePage.webview();
    });

});