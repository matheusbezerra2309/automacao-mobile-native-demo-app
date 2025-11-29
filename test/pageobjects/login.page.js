// test/pageobjects/LoginPage.js
class LoginPage {
    get inputUsername() { return $('~username-input'); }
    get inputPassword() { return $('~password-input'); }
    get btnLogin() { return $('~login-btn'); }
    get welcomeText() { return $('~welcome-message'); }

    async login(username = 'bob@example.com', password = '10203040') {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await expect(this.welcomeText).toBeExisting();
        await expect(this.welcomeText).toHaveTextContaining('Welcome');
    }
}

module.exports = new LoginPage();