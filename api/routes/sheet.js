var GoogleSpreadsheet = require('google-spreadsheet'),
    async = require('async'),
    router 	= require('express').Router(),
    creds = require('./../serviceAccountKey.json');

var sheetKey = '1mrrJF-qoSJPCTdsrhMSgo2sZcd50F-dwSQMnp7fFewo';

// spreadsheet key is the long id in the sheets URL 
var doc = new GoogleSpreadsheet(sheetKey);
var sheet;


router.post('/', function(req, res){

    var contactName = req.body.name,
        contactEmail = req.body.email;

    async.series([

        function setAuth(step) {
            doc.useServiceAccountAuth(creds, step);
        },

        function getInfoAndWorksheets(step) {
            doc.getInfo(function(err, info) {
                console.log('Loaded doc: '+info.title+' by '+info.author.email);
                sheet = info.worksheets[0];
                console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
                step();
            });
        },

        function workingWithRows(step) {
        // google provides some query options 
            var new_row = {name: contactName, email: contactEmail};
            sheet.addRow(new_row, function(err){
                console.log(err);
                step();
            });    
        }
    ]);

})

module.exports = router;

