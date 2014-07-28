define(function(require, exports, module) {
    var $ = require('jquery'),
        utils = require('/javascripts/utils');
	
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
   
    var pageNumber = 3;

    /*
    **    懸停顯/隱切換頁，fadeIn/Out有bug
    */	
	$mainControl.hover(
	function () {
		$changeSong.stop().fadeIn(1000);
		$(this).addClass('hover');
	},
	function () {
		$changeSong.stop().fadeOut(600);
		$(this).removeClass('hover');
	});
	

    /*
    **    切換頁按鈕的交互
    */	
	$prev.hover(
	function () {
		$(this).addClass('hover');
	},
	function () {
		$(this).removeClass('hover');
	});
	$prev.click(function (event) {
		event.stopPropagation();
		utils.prevPage();
	});
	
	$next.hover(
	function () {
		$(this).addClass('hover');
	},
	function () {
		$(this).removeClass('hover');
	});
	$next.click(function (event) {
		event.stopPropagation();
		utils.nextPage(pageNumber);
	});
	
	
	/*
	**    播放/暫停按鈕的交互
	*/
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
	
	//    初始態播放/暫停按鈕自動切換
	$('#profile .hot li:first-child').addClass('loading');
	if (!$mediaplayer.get(0).paused) {
	    $('#profile .hot .loading').addClass('playing').removeClass('loading');
	    $mainControl.removeClass('pause').addClass('play');
	}
	$mediaplayer.get(0).addEventListener('canplay', function(event) {
		$('#profile .hot .loading').addClass('playing').removeClass('loading');
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
			if ($shuffle.hasClass('on')) {
				$shuffle.removeClass('on');
				localStorage.setItem('shuffle', 0);	
			}
			$(this).addClass('on');
			localStorage.setItem('loop', 1);
			$mediaplayer.attr('loop', 'loop');
		}
	});
	
//	$shuffle.hover(
//	function () {
//		$shuffle.addClass('hover');
//	},
//	function () {
//		$shuffle.removeClass('hover');
//	});
//	$shuffle.click( function () {
//		if ($(this).hasClass('on')) {
//			$(this).removeClass('on');
//			localStorage.setItem('shuffle', 0);
//			// 需要去掉shuffle的功能
//		}
//		else {
//			if ($loop.hasClass('on')) {
//				$loop.removeClass('on');
//				localStorage.setItem('loop', 0);	
//			}
//			$(this).addClass('on');
//			localStorage.setItem('shuffle', 1);
//			// 需要加上shuffle的功能
//		}
//	});


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
		        if (navigator.userAgent.indexOf('MSIE') > -1) {
		            console.log('WTF');
		            if ($mediaplayer.get(0).canPlayType('audio/ogg')) {
		            	$mediaplayer.attr('src', $(this).attr('data-oggsrc'));
		            	$mediaplayer.html('');			
		            }
		            else {
		            	$mediaplayer.attr('src', $(this).attr('data-mp3src'));
		            	$mediaplayer.html('');
		            }    
		        }
		        else {
		            if ($mediaplayer.get(0).canPlayType('audio/ogg')) {
		            	$mediaplayer.attr('src', $(this).attr('data-oggsrc'));					
		            }
		            else {
		            	$mediaplayer.attr('src', $(this).attr('data-mp3src'));	
		            }    
		        }
		    						
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
});