$(document).ready(function() {
    var $preload = $('#preload'),
    	$when = $preload.find('#when'),
	    $who = $preload.find('#who'),
	    $background = $('#background'),
	    $image = $('#background img'),
	    $sidebar = $('#sidebar'),
	    $pageControls = $('#sidebar .controls'),
	    $pageControlsButton = $('#sidebar .controls .button'),	
	    $mediaplayer = $('#mediaplayer'),
        $review = $('#review'),
    	$back = $review.find('.back a'),
        $notice = $('#notice');
        
    var $mediaplayer = $('#mediaplayer');
    var $player = $('#player');
    var $mainControl = $player.find('#mainControl');
    var $changeSong = $player.find('#changeSong');
    var $prev = $changeSong.find('.prev');
    var $next = $changeSong.find('.next');
    var $loop = $player.find('.loop');
    var $shuffle = $player.find('.shuffle');	
    var $volume = $('.volume');
    var $volumebar = $volume.find('.volumebar');
    var $hotSong = $('#profile .hot li');
    var $hotSongLink = $('#profile .hot a');
    var $specialButton = $('button.special');
    
    var $profile = $('#profile');
	
	
	/**
	 *    幕布（預加載）頁面
	 */
	$preload.delay(8000).animate({ height: 0 }, 1000);
	$when.delay(1000).fadeIn(800).delay(6200).fadeOut(1000);
	$who.delay(3500).fadeIn(800).delay(3700).fadeOut(1000);
	

	// 使展示版可拖動。
	$profile.draggable();


    /**
     *    歌曲控制按鈕的交互
     */
     
    $mainControl.hover(function () {
    	$(this).css('cursor', 'pointer');
    },
    function () {
    	$(this).css('cursor', 'default');
    });
    
    // 播放/暫停按鈕的交互
    $mainControl.click(function () {
    	if ($(this).hasClass('pause')) {
    	    if ($('#profile .hot li.loading').length > 0) {
    	        return;    
    	    }
    		$(this).removeClass('pause').addClass('play');
    		$mediaplayer.get(0).play();
    	}
    	else {
    		$(this).removeClass('play').addClass('pause');
    		$mediaplayer.get(0).pause();
    	}
    });
    
    // TODO：懸停顯/隱切換歌，fadeIn/Out有bug。（一年前的註釋，我也發現不了bug了...）	
    $mainControl.hover(function () {
    	$changeSong.stop().fadeIn(1000);
    	$(this).addClass('hover');
    }, function () {
    	$changeSong.stop().fadeOut(600);
    	$(this).removeClass('hover');
    }); 
     
    $prev.hover(function () {
    	$(this).addClass('hover');
    }, function () {
    	$(this).removeClass('hover');
    });
    $next.hover(function () {
    	$(this).addClass('hover');
    }, function () {
    	$(this).removeClass('hover');
    });
    
    $prev.click(function (event) {
    	event.stopPropagation();
    	playPrevSong();
    });
    $next.click(function (event) {
    	event.stopPropagation();
    	playNextSong();
    });


	
	
	/**
	 *    初始態播放/暫停按鈕自動切換
	 */
	var songNumber = $('#profile .hot ul').children().length;
	var playingIndex; 
	if (!localStorage.getItem('playingIndex')) {
	    localStorage.setItem('playingIndex', 0);    
	}
	playingIndex = parseInt(localStorage.getItem('playingIndex'), 10);
	$('#profile .hot li').eq(playingIndex).addClass('loading');
	if ($mediaplayer.get(0).canPlayType('audio/ogg')) {
		$mediaplayer.attr('src', $hotSongLink.eq(playingIndex).attr('data-oggsrc'));	
	}
	else {
		$mediaplayer.attr('src', $hotSongLink.eq(playingIndex).attr('data-mp3src'));	
	}

	
	
	
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
			if ($shuffle.hasClass('on')) {
				$shuffle.removeClass('on');
				localStorage.setItem('shuffle', 0);	
			}
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
    **    熱門歌曲的播放邏輯
    */    
	$hotSongLink.click(function (event) {
		event.preventDefault();
		
		if (navigator.userAgent.indexOf('MSIE') > -1) {
		    return;
		}
		else {
		    if ($(this).parent().hasClass('loading') || $(this).parent().hasClass('playing')) {
		    	return;
		    }
		    else {
		        if ($mediaplayer.get(0).canPlayType('audio/ogg')) {
	            	$mediaplayer.attr('src', $(this).attr('data-oggsrc'));					
	            }
	            else {
	            	$mediaplayer.attr('src', $(this).attr('data-mp3src'));	
	            }
		    	localStorage.setItem('playingIndex', $hotSongLink.index($(this)));
		    						
		        $(this).parent().addClass('loading').siblings().removeClass('loading').removeClass('playing');
		        
		        $mainControl.removeClass('play').addClass('pause');	          
		    }    
		}
	});
	$hotSongLink.mouseover(function (event) {
	    if (navigator.userAgent.indexOf('MSIE') > -1) {
	        $(this).css('cursor', 'default'); 
	    }   
	});	
	
	$('<img />').attr('src', $image.attr('src')).load(function () {    // to get the image's natural width and height
	    var imageWidth = this.width;
	    var imageHeight = this.height;
	    var imageRatio = imageWidth / imageHeight;	    
	    var windowWidth = $(window).width();
    	var windowHeight = $(window).height(); 
    	var windowRatio = windowWidth / windowHeight;
    	var widthOffset;
	    	
    	if (imageRatio >= windowRatio) {
    		// set image height to be 100%
    		$image.css('height', windowHeight);
    		widthOffset = Math.floor((windowHeight * imageRatio - windowWidth) / 2);
    		$background.css('left', -widthOffset);	
    	}
    	else {
    		// set image width to be 100%
    		$image.css('width', windowWidth);
    		$background.css('left', 0);
    	}
	    	
    	$(window).on('resize', function () {
    		// this是window被jQuery包裝後的對象？
    		// console.log(this);
    		clearTimeout(this.id);
    		this.id = setTimeout(function () {
    			windowWidth = $(window).width();
    			windowHeight = $(window).height(); 
    			windowRatio = windowWidth / windowHeight;
    			
    			if (imageRatio >= windowRatio) {
    				// set image height to be 100%，但是設置100%無效，使用px作爲單位就有效了。
    				// 設置成100%時，如果窗口尺寸大於原圖尺寸，將取原圖的尺寸。
    				$image.css('height', windowHeight);	
    				$image.css('width', 'auto');
    				widthOffset = Math.floor((windowHeight * imageRatio - windowWidth) / 2);
    				$background.css('left', -widthOffset);	
    			}
    			else {
    				// set image width to be 100%
    				$image.css('width', windowWidth);
    				$image.css('height', 'auto');
    				$background.css('left', 0);
    			}					   			
    		}, 50);
    	});	       
	});	
	
	/**
	 *    一首歌播完後，（目前默認）播下一首歌。
	 */
	$mediaplayer.get(0).addEventListener('ended', function(event) {
		playNextSong();	
	});
	
	// 播放器的canplay事件。
	$mediaplayer.get(0).addEventListener('canplay', function(event) {
		$('#profile .hot .loading').addClass('playing').removeClass('loading');
		$mainControl.removeClass('pause').addClass('play');	
	});
	
	
	
	/**
	 * 音樂卡片feature
	 * 暫停
	 */
//	$specialButton.click(function () {
//	    $mediaplayer.get(0).pause();
//	    $mainControl.removeClass('pause').addClass('play');
//	    window.open('/specials/demo/music-card', '_blank');
//	});
	
	
	
	
	function playPrevSong() {
	    var currentIndex = decrementPlayingIndex();
	    playSongByIndex(currentIndex);
	}
	function playNextSong() {
	    var currentIndex = incrementPlayingIndex();
	    playSongByIndex(currentIndex);
	}
	
	function playSongByIndex(index) {
	    var $playingNode = $hotSongLink.eq(index);
	    if ($mediaplayer.get(0).canPlayType('audio/ogg')) {
	    	$mediaplayer.attr('src', $playingNode.attr('data-oggsrc'));					
	    }
	    else {
	    	$mediaplayer.attr('src', $playingNode.attr('data-mp3src'));	
	    }
	    
	    // loading时的状态。加载完毕会触发$mediaplayer的canplay事件。
	    $playingNode.parent().addClass('loading').siblings().removeClass('loading').removeClass('playing');
	    $mainControl.removeClass('play').addClass('pause');
	};
	
	// TODO：有无可能复用？
	function incrementPlayingIndex() {
	    var songNumber = $profile.find('.hot ul').children().length;
	    var playingIndex = parseInt(localStorage.getItem('playingIndex'), 10);
	    playingIndex += 1;
	    if (playingIndex === songNumber) {
	        playingIndex = 0;
	    }
	    localStorage.setItem('playingIndex', playingIndex);
	    
	    return playingIndex;
	}
	function decrementPlayingIndex() {
	    var songNumber = $profile.find('.hot ul').children().length;
	    var playingIndex = parseInt(localStorage.getItem('playingIndex'), 10);
	    playingIndex -= 1;
	    if (playingIndex === -1) {
	        playingIndex = songNumber - 1;
	    }
	    localStorage.setItem('playingIndex', playingIndex);
	    
	    return playingIndex;
	}
});