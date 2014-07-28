$(document).ready(function() {
    //	tab switch
    $('.nav-tabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
    
    if (window.localStorage.getItem('contributorEmail')) {
    	$('#contribute #email').val(window.localStorage.getItem('contributorEmail'));	
    };
    if (window.localStorage.getItem('contributorNickname')) {
    	$('#contribute #nickname').val(window.localStorage.getItem('contributorNickname'));	
    };
    
    $('#contribute button').click(function () {
    	if ($('#contribute #email').val()) {
    		window.localStorage.setItem('contributorEmail', $('#contribute #email').val());	
    	};
    	if ($('#contribute #nickname').val()) {
    		window.localStorage.setItem('contributorNickname', $('#contribute #nickname').val());	
    	}
    });  

    $('#join button').click(function () {
        if ($('#join-fallback').length <= 0) {
            $('#join').append($('<div id="join-fallback">如果瀏覽器沒有任何反應，請發申請郵件至izebellapark@gmail.com，謝謝。</div>'));
        }        
    });  
});