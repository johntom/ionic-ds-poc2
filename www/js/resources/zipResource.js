'use strict';


angular.module('crmApp')
    .factory('Zipcodes', ['$resource', '$q', function ($resource, $q) {
        return $resource(
            '/zipcodes/:action/:id',
            {action: '@action', id:'@id' },
            {
                findAll:{method:'GET',isArray:true},   // same as query
                find1: { method: 'GET', params: {id: '@id'} },
                getZip: {method: 'GET',params: {action: 'getZip'} }

            }
        )
    }]);
