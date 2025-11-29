// test/specs/signUp.spec.js
const SignUpPage = require('../pageobjects/SignUpPage');

describe('Native Demo App - Sign Up', () => {
    it('Realizar cadastro com sucesso no app', async () => {
        await SignUpPage.signUp();
    });

    it('Exibir mensagem de erro ao cadastrar com valores inválidos', async () => {
        await SignUpPage.signUpWithEmpty();
    });

    it('Validar mensagem ao incluir um email inválido', async () => {
        await SignUpPage.signUpWithEmpty();
    });
});