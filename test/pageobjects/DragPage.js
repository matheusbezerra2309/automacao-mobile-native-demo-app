// test/pageobjects/DragPage.js
class DragPage {
    get dragText() { return $('//*[@text="Drag"]'); }
    get dragMessageText() { return $('//*[@text="Drag and Drop"]'); }

    async drag() {
        await this.dragText.click();
        await this.dragMessageText.waitForDisplayed({ timeout: 50000 });

    }

}

module.exports = new DragPage();