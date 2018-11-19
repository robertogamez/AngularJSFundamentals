var eventsApp = angular.module('eventsApp', ['ngResource', 'datatables'])
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', { capacity: 3 });
    });
