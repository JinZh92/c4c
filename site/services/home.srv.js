(function(){
    'use strict'

    angular
        .module('c4cApp')
        .service('HomeSrv', HomeSrv);
    
    HomeSrv.$inject = ['$http'];
    function HomeSrv($http) {
        var self = this;

        self.getFileNames = getFileNames;
        self.sendEmail = sendEmail;
        self.addToSheet = addToSheet;

        // return an array of names for certain type of files
        // types can be "hero"/"photo" for hero images or photos
        function getFileNames(type) {
            if (type == 'hero') {
                return $http.get('/api/filedir/hero')
                    .then(function(res){
                        // console.log("hero image res", res);
                        return res.data.herofilenames;
                    });

            } else if (type == 'photo') {
                return $http.get('/api/filedir/photos')
                    .then(function(res){
                        return res.data.photofilenames;
                    });
            }
        } 

        // send email
        function sendEmail(name, email, msg) {
            var new_email = {
                name: name,
                email: email,
                msg: msg
            }
            return $http.post('api/mailer', new_email)
                .then(function(res){
                    if (res.status == 200) {
                        // sucess
                    } else {
                        // fail
                    }
                    console.log(res);
                });
        }

        // add name and email to google spreadsheet
        function addToSheet(name, email) {
            var contact = {
                name: name,
                email: email
            }

            return $http.post('api/sheet', contact)
                .then(function(res){
                    console.log(res);
                });
        
        }
    }
})();