// @ts-ignore
import { JSONReporter, HTMLReportGenerator } from 'wdio-json-html-reporter';

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
        [JSONReporter, {
            outputFile: './reports/test-results.json',
            screenshotOption: 'OnFailure'  // or "No", "Full"
        }]
    ],

    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function (passed, assertion) {
            // custom handling here
        }
    },

    // Hook: onComplete - generate final HTML from JSON
    onComplete: async function () {
        const outputFilePath = './reports/test-report.html';
        const jsonFolder = './reports';
        const historyFile = './reports/history.json'; // Optional

        const reportGenerator = new HTMLReportGenerator(outputFilePath, historyFile);
        await reportGenerator.convertJSONFolderToHTML(jsonFolder);
    }
};
