/// <reference path="../../lib/angular/angular.js" />
'use strict';

angular.module('eventsApp')
    .controller('EventController', function ($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '13/10/2018',
            time: '05:00 pm',
            location: {
                address: 'Google Template',
                city: 'Mountain View',
                state: 'CA'
            },
            imageUrl: '/app/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bon Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 min',
                    level: 'Advanced',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hrs',
                    level: 'Advanced',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

    });