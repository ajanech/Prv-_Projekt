(function($) {

    var login = $('.login-popup');
    var loginbutton = $('.login-button');

    login.hide();
    var hidden = true;

    loginbutton.on('click', function(event) {
        if(hidden) {
            login.fadeIn(500);
            hidden = false;
        }
        else {
            login.fadeOut(500);
            hidden = true;
        }
    });

})(jQuery);