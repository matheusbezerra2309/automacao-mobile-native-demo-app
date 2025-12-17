// test/pageobjects/SwipePage.js
class SwipePage {
    get swipeText() { return $('//*[@text="Swipe"]'); }
    get swipeMessageText() { return $("//*[@text='Or swipe vertical to find what I'm hiding.']"); }

    async swipe() {
        await this.swipeText.click();
        await this.swipeMessageText.waitForDisplayed({ timeout: 50000 });

    }

}

module.exports = new SwipePage();