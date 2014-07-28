var mongoose = require('mongoose');

var element = new mongoose.Schema({
    month: Number,
    day: Number,
    album: String,
    artist: String,
    year: Number,
    type: String,
    bg_src: String,
    mp3_src: String,
    ogg_src: String,
    album_src: String,
    /*
    links: [{
        type: String,
        href: String
    }],
    */
    links: String,
    /*
    recommend: [String],
    */
    recommend: String,
    /*
    hotlists: [{
        name: String,
        mp3src: String,
        oggsrc: String
    }],
    */
    hotlists: String,
    review: {
        href: String,
        title: String,
        author: String,
        site_type: String,
        /*
        content: [String]
        */
        content: String
    }
});

var Element = mongoose.model('Element', element);

module.exports = Element;