import { ReportAggregator, HtmlReporter } from "wdio-html-nice-reporter";

export const config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    maxInstances: 10,

    capabilities: [{
        browserName: 'MicrosoftEdge'
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'jasmine',

    reporters: [
        'spec',
        ['html-nice', {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Automation Report',
            linkScreenshots: true,
            showInBrowser: true,
            collapseTests: true,
            writeToFile: true,
            useOnAfterCommandForScreenshot: true,
            showInReport: true,  // this ensures step logs are visible
            showConsoleLog: true // this shows console.log too

        }]
    ],

    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function (passed, assertion) {
            // custom handling here
        }
    },

    //
    // Initialize the report aggregator variable in the config scope to access in hooks
    reportAggregator: undefined,

    // Hook: onPrepare - runs before test starts
    onPrepare: function (config, capabilities) {
        this.reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'final_report.html',
            reportTitle: 'Final Consolidated Report',
            browserName : capabilities[0].browserName,
            collapseTests: true
        });
        // Clean previous reports if needed
        this.reportAggregator.clean();
    },

    // Hook: onComplete - runs after all tests are done
    onComplete: async function (exitCode, config, capabilities, results) {
        await this.reportAggregator.createReport();
    }

};