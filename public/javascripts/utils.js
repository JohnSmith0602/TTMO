define(function(require, exports, module) {
    var $ = require('jquery');
    
    exports.nextPage = function (pageNumber) {
        var index = parseInt(window.location.href.slice(-1), 10);
        if (index == pageNumber) {
            $('#notice').fadeIn(1000);
            $('audio').get(0).pause();
            return;
        }
        var newURL = window.location.href.slice(0, -1) + (index + 1);
        window.open(newURL, '_parent');
    };

    exports.prevPage = function () {
    	var newURL,
            index = parseInt(window.location.href.slice(-1), 10);
        if (index == 1) {
            newURL = window.location.href.slice(0, -1) + 1;
        }
        else {
        	newURL = window.location.href.slice(0, -1) + (index - 1);	
        }
        window.open(newURL, '_parent');
    };
});