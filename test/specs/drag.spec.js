// test/specs/drag.spec.js
const DragPage = require('../pageobjects/DragPage');

describe('Native Demo App - DragPage', () => {
    it('Navegar até o menu de Drag', async () => {
        await DragPage.drag();
    });

});