// test/pageobjects/LoginPage.js
class LoginPage {
    get inputEmail() { return $('//*[@text="Email"]'); }
    get inputPassword() {  return $('//*[@text="Password"]'); }
    get btnLogin() { return $('//*[@text="LOGIN"]'); }
    get welcomeText() { return $('~welcome-message'); }
    get successMessage() { return $('//*[@text="You are logged in!"]'); }
    get loginText() { return $('//*[@text="Login"]'); }

    async login(username = 'bob@example.com', password = '10203040') {
        await this.loginText.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await successMessage.waitForDisplayed({ timeout: 50000 });    }
}

module.exports = new LoginPage();