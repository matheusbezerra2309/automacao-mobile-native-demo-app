// test/specs/login.spec.js
const LoginPage = require('../pageobjects/LoginPage');

describe('Native Demo App - Login', () => {
    it('Realizar login com sucesso', async () => {
        await LoginPage.login();
    });

    it('Validar mensagem de erro ao logar com email inválido', async () => {
        await LoginPage.loginWithInvalidEmail();
    });

    it('Validar mensagem de erro ao logar sem credenciais', async () => {
        await LoginPage.loginWithErros();
    });
});