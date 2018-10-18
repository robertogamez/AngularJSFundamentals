"use strict";

angular.module('eventsApp')
    .controller('EditEventController', function ($scope, eventData) {

        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save({
                    eventModel: event
                })
                    .$promise.then(function (response) {
                        console.log('success: ', response);
                    }).catch(function (response) {
                        console.log('failure: ', response);
                    });
            }
        }

        $scope.cancelEdit = function () {
            location = '/Home/Details';
        }

    });