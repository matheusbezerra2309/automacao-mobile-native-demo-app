// test/pageobjects/LoginPage.js
class LoginPage {
    get inputEmail() { return $('//*[@text="Email"]'); }
    get inputPassword() { return $('//*[@text="Password"]'); }
    get btnLogin() { return $('//*[@text="LOGIN"]'); }
    get welcomeText() { return $('~welcome-message'); }
    get successMessage() { return $('//*[@text="You are logged in!"]'); }
    get loginText() { return $('//*[@text="Login"]'); }
    get errorInvalidEmail() { return $('//*[@text="Please enter a valid email address"]'); }
    get errorInvalidPass() { return $('//*[@text="Please enter at least 8 characters"]'); }

    async login(username = 'bob@example.com', password = '10203040') {
        await this.loginText.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await this.successMessage.waitForDisplayed({ timeout: 50000 });
    }

    async loginWithErros(username = '', password = '') {
        await this.loginText.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await this.errorInvalidEmail.waitForDisplayed({ timeout: 50000 });
        await this.errorInvalidPass.waitForDisplayed({ timeout: 50000 });

    }
}

module.exports = new LoginPage();