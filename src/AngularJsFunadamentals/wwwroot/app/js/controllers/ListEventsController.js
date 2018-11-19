"use strict";

angular.module('eventsApp')
  .controller('ListEventController', [
    '$scope',
    '$http',
    'DTOptionsBuilder',
    'DTColumnBuilder',
    listEvent]);

function listEvent($scope, $http, DTOptionsBuilder, DTColumnBuilder) {

  $scope.events = {};

  $scope.dtColumns = [
    //here We will add .withOption('name','column_name') for send column name to the server 
    DTColumnBuilder.newColumn("eventId", "Event ID").withOption('name', 'eventId'),
    DTColumnBuilder.newColumn("eventName", "Event Name").withOption('name', 'eventName'),
    DTColumnBuilder.newColumn("city", "City").withOption('name', 'city')
  ];

  $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('ajax', {
    dataSrc: "data",
    url: "/datatableexample/getevents",
    type: "POST"
  })
    .withOption('processing', true) //for show progress bar
    .withOption('serverSide', true) // for server side processing
    .withPaginationType('full_numbers') // for get full pagination options // first / last / prev / next and page numbers
    .withDisplayLength(3); // Page size

}
