// test/specs/formulario.spec.js
const FormPage = require('../pageobjects/FormPage');

describe('Native Demo App - Formulario', () => {
    it('Interagir com os campos de formulário no app', async () => {
        await FormPage.form();
    });

});