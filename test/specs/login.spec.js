// test/specs/login.spec.js
const LoginPage = require('../pageobjects/LoginPage');

describe('Native Demo App - Login', () => {
    it('deve fazer login com sucesso', async () => {
        await LoginPage.login();
    });
});