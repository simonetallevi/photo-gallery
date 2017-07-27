'use strict';

MainController.$inject = ['$log'];
function MainController($log) {
    var _this = this;
    $log.log('mainController initialized')
}

module.exports = MainController;