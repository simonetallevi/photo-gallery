'use strict';

var angular = require('angular');

angular.module('photoGallery')
    .controller('mainController', require('./main.controller'))
    .controller('homeController', require('./home/home.controller'));