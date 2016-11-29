var dir = require('node-dir'),
    router 	= require('express').Router(); 

router.get('/hero', function(req, res){
    console.log('trying to get hero images')
    var herofilepath = 'assets/img/herophotos/'; 
    // when run server.js from within api folder, the path is '../assets/img/herophotos/'
    // when run server.js from app base folder, the path is 'assets/img/herophotos/'
    // So the path is dependent on where the node server.js command is run, not where this file is located

    dir.files(herofilepath, function(err, files) {
        if (err) throw err;
        // console.log('Hero file names:', files);
        var filenames = files.map(function(file){
            return file.replace(herofilepath, '');
        });

        // check condition in case there is a hidden file that starts with '.' in the name.
        filenames = filenames.filter(function(file){
            return file[0] != '.';
        })
    
        res.json({herofilenames: filenames});
    });
});

router.get('/photos', function(req, res){
    console.log('trying to get photos')
    var photofilepath = 'assets/img/photos/';

    dir.files(photofilepath, function(err, files) {
        if (err) throw err;
        // console.log('photo file names:', files);
        var filenames = files.map(function(file){
            return file.replace(photofilepath, '');
        });

        // check condition in case there is a hidden file that starts with '.' in the name.
        filenames = filenames.filter(function(file){
            return file[0] != '.';
        }); 

        res.json({photofilenames: filenames});
    });
});


module.exports = router;