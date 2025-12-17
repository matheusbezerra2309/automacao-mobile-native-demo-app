// test/pageobjects/FormPage.js
class FormPage {
    get typeText() { return $('//*[@text="Type something"]'); }
    get switchDarkMode() { return $('~dark-mode-switch'); }
    get activeText() { return $('//*[@text="Active"]'); }
    get activeMessageText() { return $('//*[@text="This button is active"]'); }
    get formsText() { return $('//*[@text="Forms"]'); }


    async form(textExample = 'bob@example.com') {
        await this.formsText.click();
        await this.typeText.click();
        await this.typeText.setValue(textExample);
        await this.activeText.click();
        await this.activeMessageText.waitForDisplayed({ timeout: 50000 });

    }

    async ativarDarkMode() {
        const estaAtivado = await this.switchDarkMode.getAttribute('checked');
        if (estaAtivado === 'false') {
            await this.switchDarkMode.click();
        }
        await expect(this.switchDarkMode).toHaveAttr('checked', 'true');
    }

    async desativarDarkMode() {
        const estaAtivado = await this.switchDarkMode.getAttribute('checked');
        if (estaAtivado === 'true') {
            await this.switchDarkMode.click();
        }
        await expect(this.switchDarkMode).toHaveAttr('checked', 'false');
    }
}

module.exports = new FormPage();