var SampleForm = require('./SampleForm.js');
describe('SampleForm', function() {
    var sampleForm;
    beforeEach(function () {
        sampleForm = new SampleForm();
    });
    afterEach(function () {
        sampleForm = null;
    });
});