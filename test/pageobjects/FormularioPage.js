// test/pageobjects/FormularioPage.js
class FormularioPage {

    get errorInvalidPass() { return $('//*[@text="Please enter at least 8 characters"]'); }

    async login(username = 'bob@example.com', password = '10203040') {
        await this.loginText.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await this.successMessage.waitForDisplayed({ timeout: 50000 });
    }

}

module.exports = new LoginPage();