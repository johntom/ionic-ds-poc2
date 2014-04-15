
angular.module('directory.resources', [])
    .factory('Dentoff', ['$resource', '$q', function ($resource, $q) {
        return $resource(
            '/dentoff/:action/:id',
            // 'http://findadentist.dentalsave.com:8002/:action/:id',
            //'http://findadentist.dentalsave.com:8002/:action/:id',
            {action: '@action', id:'@id' },
            {
                //    websearch: {method:'GET',isArray: true,params: {action:'websearch'}}
//                websearch: {method:'GET',isArray: true,params: {action:'websearch'}} ,
//                webcount: {method:'GET',isArray: false,params: {action:'webcount'}}, // if passing obhect with count
                find1: { method: 'GET', params: {id: '@id'} },
                findAll: { method: 'GET', isArray: true}            // same as query
//                findSpacial:{method:'GET',isArray: false,params: {action:'findSpacial'}},
//                email: { method: 'PUT', params: {action:'email' } }
            }
        )
    }]);
