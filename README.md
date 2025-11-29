# automacao-mobile-native-demo-app

# Automação Mobile – Native Demo App (WebdriverIO + Appium + BrowserStack)

Projeto para prova **Native Demo App v1.0.8** (React Native) rodando em **dispositivos reais** Android e iOS via **BrowserStack App Automate**.

**Tecnologias utilizadas (2025):**
- WebdriverIO v8+
- Appium (via BrowserStack)
- Mocha + Chai
- Page Object Model
- Allure Report (relatório único HTML)
- GitHub Actions (CI/CD com paralelismo)
- BrowserStack (devices reais: Pixel 9 + iPhone 16)

### Estrutura de pastas
automacao-mobile-native-demo-app/
├── test/
│   ├── pageobjects/           ← Page Objects (reutilizáveis)
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── SwipePage.js
│   │   ├── DragPage.js
│   │   ├── SignUpPage.js
│   │   ├── WebViewPage.js  
│   │
│   └── specs/                     ← Testes organizados por funcionalidade
│       ├── login.spec.js
│       ├── swipe.spec.js
│       ├── form.spec.js
│       ├── singUp.spec.js
│       ├── drag.spec.js
│       ├── webview.spec.js
│
├── wdio.conf.js                   ← Configuração principal (BrowserStack + Allure + hooks)
├── package.json
├── .github/
│   └── workflows/
│       └── e2e.yml                ← CI que roda Android + iOS em paralelo e gera relatório único
└── allure-report/                 ← Gerado automaticamente no CI (HTML final)

### Cenários

| #  | Cenário de Teste                                              |
|----|---------------------------------------------------------------|
| 1  | Navegar até o menu de Swipe                                   |
| 2  | Navegar até o menu de Webview                                 |
| 3  | Realizar cadastro com sucesso no app                          |
| 4  | Exibir mensagem de erro ao cadastrar com valores inválidos    |
| 5  | Validar mensagem ao incluir um email inválido                 |
| 6  | Realizar login com sucesso                                    |
| 7  | Validar mensagem de erro ao logar com email inválido          |
| 8  | Validar mensagem de erro ao logar sem credenciais             |
| 9  | Interagir com os campos de formulário no app                  |
| 10 | Navegar até o menu de Drag                                    |

### Como rodar

```bash
# 1. Clone o projeto
git clone https://github.com/matheusbezerra2309/automacao-mobile-native-demo-app.git

# 2. Instale as dependências
npm install

O GitHub Actions roda Android e iOS em paralelo
Um job final junta tudo e gera um único relatório Allure
Você baixa o artefato “Relatório Final HTML - Android + iOS” e abre o index.html
