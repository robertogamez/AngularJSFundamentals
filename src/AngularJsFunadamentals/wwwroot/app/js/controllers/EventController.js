/// <reference path="../../lib/angular/angular.js" />
'use strict';

angular.module('eventsApp')
    .controller('EventController', function ($scope) {

        $scope.sortorder = 'name';
        $scope.snippet = '<span style="color: red">h1 there</span>';
        $scope.boolValue = false;
        $scope.mystyle = {
            color: 'red'
        };
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;

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
                    name: 'Directives Masterclass - Advanced',
                    creatorName: 'Bon Smith',
                    duration: 1,
                    level: 'advanced',
                    upVoteCount: 1
                },
                {
                    name: 'Scopes for fun and profit - Intermediate',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'intermediate',
                    upVoteCount: 2
                },
                {
                    name: 'Well Behaved Controllers - Advanced',
                    creatorName: 'Jane Doe',
                    duration:  3,
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