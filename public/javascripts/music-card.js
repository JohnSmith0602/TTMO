$(document).ready(function() {
    var $mediaplayer = $('#mediaplayer');
    var $player = $('#player');
    var $mainControl = $player.find('#mainControl');
    var $loop = $player.find('.loop');	
    var $volume = $('.volume');
    var $volumebar = $volume.find('.volumebar');

    $mainControl.hover(
    function () {
    	$(this).css('cursor', 'pointer');
    },
    function () {
    	$(this).css('cursor', 'default');
    });
    
    /*
    **    播放/暫停按鈕的交互
    */
    $mainControl.click(function () {
    	if ($(this).hasClass('pause')) {
    		$(this).removeClass('pause').addClass('play');
    		$mediaplayer.get(0).play();
    	}
    	else {
    		$(this).removeClass('play').addClass('pause');
    		$mediaplayer.get(0).pause();
    	}
    });
    
    if (!$mediaplayer.get(0).paused) {
        $mainControl.removeClass('pause').addClass('play');
    }
    $mediaplayer.get(0).addEventListener('canplay', function(event) {
    	$mainControl.removeClass('pause').addClass('play');	
    });
    
    /*
    **    循環/隨機按鈕的交互（隨機按鈕當前版本沒有）
    */
    $loop.hover(
    function () {
    	$loop.addClass('hover');
    },
    function () {
    	$loop.removeClass('hover');
    });
    $loop.click( function () {
    	if ($(this).hasClass('on')) {
    		$(this).removeClass('on');
    		localStorage.setItem('loop', 0);
    		$mediaplayer.removeAttr('loop');
    	}
    	else {
    		$(this).addClass('on');
    		localStorage.setItem('loop', 1);
    		$mediaplayer.attr('loop', 'loop');
    	}
    });
    
    /*
    **    音量條
    */
    $volume.hover(
    function () {
    	$(this).css('cursor', 'pointer');
    },
    function () {
    	$(this).css('cursor', 'default');
    });
    
    $volumebar.hover(
    function () {
    	$(this).addClass('hover');
    },
    function () {
    	$(this).removeClass('hover');
    });
    
    $volumebar.click(function () {
    	$mediaplayer.get(0).volume = ($volumebar.index(this) + 1) / $volume.children().length;
    	window.localStorage.setItem('volume', $volumebar.index(this) + 1);
    	$(this).addClass('on').prevAll().addClass('on');
    	$(this).nextAll().removeClass('on');
    });
    
    
    /*
    **    把播放器的音量值存在localStorage中
    */
    if (!window.localStorage.getItem('volume')) {
    	window.localStorage.setItem('volume', Math.ceil($volume.children().length / 2));
    	$mediaplayer.get(0).volume = Math.ceil($volume.children().length / 2) / $volume.children().length;	
    }
    var volumeNum = parseInt(window.localStorage.getItem('volume'), 10);
    $volumebar.eq(volumeNum - 1).addClass('on').prevAll().addClass('on');
    $volumebar.eq(volumeNum - 1).nextAll().removeClass('on');
    
    /*
    **    背景圖自動縮放
    **
    */	
    
    // 使用新的百度盤鏈接後theImage的尺寸始終爲0，原因未知。
    /*
    var theImage = new Image();
    theImage.src = $image.attr('src');
    console.log(theImage.width);	
    var imageWidth = theImage.width;
    var imageHeight = theImage.height;
    var imageRatio = imageWidth / imageHeight;
    console.log('iW: ' + imageWidth);
    console.log('iH: ' + imageHeight);
    console.log('iR: ' + imageRatio);
    //console.log($image.attr('height'));
    */	
    var $image = $('#image');
    
    $('<img />').attr('src', $image.attr('src')).load(function () {    // to get the image's natural width and height
        var imageWidth = this.width;
        var imageHeight = this.height;
        var imageRatio = imageWidth / imageHeight;	    
        var windowWidth = $(window).width() - 600;
    	var windowHeight = $(window).height(); 
    	var windowRatio = windowWidth / windowHeight;
    	var widthOffset;
        	
    	if (imageRatio >= windowRatio) {
    		// set image height to be 100%
    		$image.css('height', windowHeight);
    		widthOffset = Math.floor((windowHeight * imageRatio - windowWidth) / 2);
    		$image.css('left', -widthOffset);	
    	}
    	else {
    		// set image width to be 100%
    		$image.css('width', windowWidth);
    		$image.css('left', 0);
    	}
        	
    	$(window).on('resize', function () {
    		// this是window被jQuery包裝後的對象？
    		// console.log(this);
    		clearTimeout(this.id);
    		this.id = setTimeout(function () {
    			windowWidth = $(window).width() - 600;
    			windowHeight = $(window).height(); 
    			windowRatio = windowWidth / windowHeight;
    			
    			if (imageRatio >= windowRatio) {
    				// set image height to be 100%，但是設置100%無效，使用px作爲單位就有效了。
    				// 設置成100%時，如果窗口尺寸大於原圖尺寸，將取原圖的尺寸。
    				$image.css('height', windowHeight);	
    				$image.css('width', 'auto');
    				widthOffset = Math.floor((windowHeight * imageRatio - windowWidth) / 2);
    				$image.css('left', -widthOffset);	
    			}
    			else {
    				// set image width to be 100%
    				$image.css('width', windowWidth);
    				$image.css('height', 'auto');
    				$image.css('left', 0);
    			}					   			
    		}, 50);
    	});	       
    });


	
	

});