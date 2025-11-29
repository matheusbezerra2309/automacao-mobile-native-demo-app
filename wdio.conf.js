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
                osVersion: '14.0',
                deviceName: 'Google Pixel 9',
                appiumVersion: '1.22.0',
                projectName: 'Native Demo App',
                buildName: process.env.GITLAB_CI_PIPELINE_ID ? `GitLab #${process.env.GITLAB_CI_PIPELINE_ID}` : 'Local Run',
                sessionName: 'Android Tests',
                debug: true,
                networkLogs: true,
                realMobile: 'true'
            },
            'appium:app': process.env.BROWSERSTACK_APP_ID_ANDROID || 'bs://8543adca28c2a1506f0076b0979bb825a71f2e26', 
            'appium:automationName': 'UiAutomator2',
            'appium:newCommandTimeout': 300,
            'appium:noReset': false,
            platformName: 'Android'
        },

        {
            'bstack:options': {
                osVersion: '18.0',
                deviceName: 'iPhone 16',
                appiumVersion: '1.22.0',
                projectName: 'Native Demo App',
                buildName: process.env.GITLAB_CI_PIPELINE_ID ? `GitLab #${process.env.GITLAB_CI_PIPELINE_ID}` : 'Local Run',
                sessionName: 'iOS Tests',
                debug: true,
                networkLogs: true,
                realMobile: 'true'
            },
            'appium:app': process.env.BROWSERSTACK_APP_ID_IOS || 'bs://03e305df2b60d26264eabca4eea52ef1dfa5a526', 
            'appium:automationName': 'XCUITest',
            'appium:newCommandTimeout': 300,
            'appium:noReset': false,
            platformName: 'iOS'
        }
    ],

    before: () => {
        require('@babel/register');
        const chai = require('chai');
        global.expect = chai.expect;
    },

    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },

    onComplete: function () {
        const report = allure(['generate', 'allure-results', '--clean']);
        report.on('exit', function (exitCode) {
            console.log('Allure report gerado com sucesso!');
        });
    }
};