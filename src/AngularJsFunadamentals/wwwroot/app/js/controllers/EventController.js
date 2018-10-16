/// <reference path="../../lib/angular/angular.js" />
/// <reference path="../services/eventdata.js" />

'use strict';

angular.module('eventsApp')
    .controller('EventController', function ($scope, $log, eventData) {

        eventData.getEvent().then(function (response) {
            $scope.event = response.data;
        }, function (error) {
            $log.warn(error);
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

    });