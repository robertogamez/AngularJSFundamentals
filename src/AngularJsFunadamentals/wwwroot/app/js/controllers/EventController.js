'use strict';

angular.module('eventsApp')
    .controller('EventController', function ($scope, $log, eventData) {

        //eventData.getEvent().then(function (response) {
        //    $scope.event = response.data;
        //}, function (error) {
        //    $log.warn(error);
        //});
        eventData.getEventResource()
            .$promise.then(
                function (event) {
                    $scope.event = event;
                    console.log(event);
                }
            )
            .catch(function (response) {
                console.log(response);
            });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

    });
