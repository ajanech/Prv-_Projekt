(function($) {

    var login = $('.login-popup');
    var loginbutton = $('.login-button');

    loginbutton.on('click', function(event) {
        login.toggleClass('hidden');
        console.log('class');
    });

})(jQuery);