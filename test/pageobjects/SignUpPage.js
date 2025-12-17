// test/pageobjects/SignUpPage.js
class SignUpPage {
    get inputEmail() { return $('//*[@text="Email"]'); }
    get inputPassword() { return $('//*[@text="Password"]'); }
    get loginText() { return $('//*[@text="Login"]'); }
    get signUpText() { return $('//*[@text="Sign up"]'); }
    get confirmPassword() { return $('//*[@text="Confirm password"]'); }
    get signUpTextBtn() { return $('//*[@text="SIGN UP"]'); }
    get messageText() { return $('//*[@text="You successfully signed up!"]'); }
    get errorInvalidEmail() { return $('//*[@text="Please enter a valid email address"]'); }
    get errorInvalidPass() { return $('//*[@text="Please enter at least 8 characters"]'); }
    get errorInvalidConfirmPass() { return $('//*[@text="Please enter the same password"]'); }
    get btnOk() { return $('//*[@text="OK"]'); }
    get btnHome() { return $('//*[@text="Home"]'); }


    async signUp(username = 'bob@example.com', password = '10203040') {
        await this.loginText.click();
        await this.signUpText.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.confirmPassword.setValue(password);
        await this.signUpTextBtn.click();
        await this.messageText.waitForDisplayed({ timeout: 50000 });
        await this.btnOk.click();
        await this.btnHome.click();
    }

    async signUpWithEmpty(username = '', password = '') {
        await this.loginText.click();
        await this.signUpText.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.confirmPassword.setValue(password);
        await this.signUpTextBtn.click();
        await this.errorInvalidEmail.waitForDisplayed({ timeout: 50000 });
        await this.errorInvalidPass.waitForDisplayed({ timeout: 50000 });
        await this.errorInvalidConfirmPass.waitForDisplayed({ timeout: 50000 });

    }

    async signUpWithInvalidEmail(username = 'bob', password = '10203040') {
        await this.loginText.click();
        await this.signUpText.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signUpTextBtn.click();
        await this.errorInvalidEmail.waitForDisplayed({ timeout: 50000 });

    }

}

module.exports = new SignUpPage();