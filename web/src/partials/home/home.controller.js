require('./home.scss');

'use strict';

HomeController.$inject = ['$log', '$scope'];

function HomeController($log, $scope) {
    var _this = this;
    $log.log('homeController initialized');
}

module.exports = HomeController;