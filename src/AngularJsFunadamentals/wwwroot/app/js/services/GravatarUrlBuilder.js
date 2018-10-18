/// <reference path="../../../lib/angular/angular.min.js" />
/// <reference path="../../../lib/angular/angular.js" />
"use strict";

angular.module('eventsApp')
    .factory('gravatarUrlBuilder', function () {
        return {
            buildGravatarUrl: function () {
                return 'https://www.google.com.mx//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
            }
        };
    });