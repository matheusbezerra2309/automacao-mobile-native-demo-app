const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    hostname: 'hub.browserstack.com',
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: ['./test/specs/**/*.spec.js'],
    maxInstances: 10,
    sync: true,
    logLevel: 'warn',
    coloredLogs: true,
    bail: 0,
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 180000
    },

    services: [
        ['browserstack', {
            browserstackLocal: false
        }]
    ],

    capabilities: [
        {
            'bstack:options': {
                osVersion: '15.0',
                deviceName: 'Google Pixel 9',
                appiumVersion: '1.22.0',
                projectName: 'Native Demo App',
                buildName: process.env.GITLAB_CI_PIPELINE_ID ? `GitLab #${process.env.GITLAB_CI_PIPELINE_ID}` : 'Local Run',
                sessionName: 'Android Tests',
                debug: true,
                networkLogs: true,
                deviceOrientation: 'portrait',
                realMobile: 'true'
            },
            'appium:app': process.env.BROWSERSTACK_APP_ID_ANDROID || 'bs://70f9abeff319b76600e2c24104cefcb17adef035',
            'appium:automationName': 'UiAutomator2',
            'appium:newCommandTimeout': 5000,
            'appium:noReset': false,
            platformName: 'Android'
        },

        {
            'bstack:options': {
                osVersion: '18.0',
                deviceName: 'iPhone 15',
                appiumVersion: '2.6.0',
                projectName: 'Native Demo App',
                buildName: process.env.GITLAB_CI_PIPELINE_ID ? `GitLab #${process.env.GITLAB_CI_PIPELINE_ID}` : 'Local Run',
                sessionName: 'iOS Tests',
                debug: true,
                networkLogs: true,
                deviceOrientation: 'portrait',
                realMobile: 'true'
            },
            'appium:app': process.env.BROWSERSTACK_APP_ID_IOS || 'bs://c36a3138aae08d6db4c39e8301e49d844bb40524',
            'appium:automationName': 'XCUITest',
            'appium:newCommandTimeout': 5000,
            'appium:noReset': false,
            platformName: 'iOS'
        }
    ],

    before: () => {
        require('@babel/register');
        const chai = require('chai');
        global.expect = chai.expect;
    },

    beforeTest: async function () {
        await browser.activateApp('com.wdiodemoapp');
        await browser.setOrientation('PORTRAIT');  // Comando WDIO/Appium padrão
        await browser.pause(2000);
        const orientation = await browser.getOrientation();
        console.log('Orientação após force:', orientation);  // Deve logar 'PORTRAIT'

    },

    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
            await browser.terminateApp('com.wdiodemoapp');
        }
    },

    onComplete: function () {
        const report = allure(['generate', 'allure-results', '--clean']);
        report.on('exit', function (exitCode) {
            console.log('Allure report gerado com sucesso!');
        });
    }
};