"use strict";

angular.module('eventsApp')
    .controller('EditEventController', function ($scope) {

        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                alert('event: ' + event.name + ' saved');
            }
        }

        $scope.cancelEdit = function () {
            location = '/Home/Details';
        }

    });