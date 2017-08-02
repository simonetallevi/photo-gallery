require('./home.scss');

'use strict';

HomeController.$inject = ['$log', '$scope'];

function HomeController($log, $scope) {
    var _this = this;
    $log.log('homeController initialized');

    $('#gallery').justifiedGallery({ rowHeight: 120 });


    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            for (var i = 0; i < 5; i++) {
                $('#gallery').append('<a>' +
                    '<img src="http://sugartin.info/wp-content/uploads/2013/11/logo.png" />' +
                    '</a>');
            }
            $('#gallery').justifiedGallery('norewind');
        }
    });
}

module.exports = HomeController;