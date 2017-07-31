'use strict';

MainController.$inject = ['$log', '$scope'];

function MainController($log, $scope) {
    var _this = this;
    $log.log('mainController initialized');
    $scope.name = 'Simone';
}

module.exports = MainController;