/// <reference path="../lib/angular/angular.js" />
/// <reference path="../lib/angular/angular.min.js" />
var eventsApp = angular.module('eventsApp', ['ngResource'])
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', { capacity: 3 });
    });