exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],

    capabilities: {
        browserName: 'chrome'
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        includeStackTrace : true,
        isVerbose : true,
        // print: function () {}
    },

    framework: 'jasmine' ,
    onPrepare: function() {
        var jasmineReporters = require('C:/protractor/Demo/node_modules/jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );
    },

    summary: function (metrics) {

        this.log(metrics.executedSpecs + ' specs, ' +  metrics.failedSpecs+ ' failures Custom Finished in ' + metrics.duration);
        if (metrics.random) {
            this.log('Randomized with seed ' + metrics.seed + '.');
        }
    },
}
