require('./app.scss');
require('angular-ui-router');

angular.module('photoGallery', [
        'ui.bootstrap',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            // Routing
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: 'partials/home/home.html',
                    controller: 'homeController as home'
                });

            $urlRouterProvider.otherwise("/home");
        }
    ]);
require('./partials');