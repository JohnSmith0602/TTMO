var settings = require('../settings'),
    mongoose = require('mongoose');

/*
**  console.log('When it\'s required, it\'s run...');
**
*/

mongoose.connect('mongodb://' + settings.host + '/' + settings.db, {
    server: {
        poolSize: 10
    }
}, function (err) {
    if (!err) {
        console.log('Connected to mongoose!');
    }
    else {
        throw err;
    }
});

exports.disconnect = function () {
    mongoose.disconnect(function (err) {
        if (!err) {
            console.log('All connections are closed...');
        }
        else {
            throw err;
        }
    });
}