/// <reference path="../../../lib/angular/angular.min.js" />
/// <reference path="../../../lib/angular/angular.js" />
"use strict";

angular.module('eventsApp')
    .controller('EditProfileController', function ($scope, gravatarUrlBuilder) {

        $scope.user = {};

        $scope.getGravatarUrl = function () {
            return gravatarUrlBuilder.buildGravatarUrl();
        }

    });