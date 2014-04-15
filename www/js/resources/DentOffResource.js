'use strict';


angular.module('directory.resources', [])
    .factory('Dentoff', ['$resource', '$q', function ($resource, $q) {
//        var url = 'http://findadentist.dentalsave.com:8002/Dentoff';//URL
//        var params = {zip:'10009',miles:1,first:0,last:0,practice:0,specialty:0,startpos:0,map:false};// params
          return $resource(
            //'/dentoff/:action/:id',
             'http://findadentist.dentalsave.com:8002/Dentoff/:action/:id',
            // 'http://findadentist.dentalsave.com:8002/:action/:id',
            //'http://findadentist.dentalsave.com:8002/:action/:id',

            {action: '@action', id:'@id' },
            {
               //fadAPI: $resource('http://findadentist.dentalsave.com:8002/Dentoff' ,
//                fadAPI:('http://findadentist.dentalsave.com:8002/Dentoff',
//                { callback: "JSON_CALLBACK" },
//                { get: { method: "JSONP", params:  {zip:'10009',miles:1,first:0,last:0,practice:0,specialty:0,startpos:0,map:false} ,
//                    isArray: false
//                }}),

                  //fadAPI:{ method: 'JSONP', params: {zip:'10009',miles:1,first:0,last:0,practice:0,specialty:0,startpos:0,map:false ,
                //   fadAPI:{ method: 'JSONP', params: {action: 'index',id:'@id1',
                   fadAPI:{ method: 'JSONP', params: {action: 'index',id:'@id',
                   callback: 'JSON_CALLBACK'}, isArray: false },

                  //findAllWrapped: { method: 'GET', params: { action: 'findAllWrapped',id:'@id1',id2:'@id2',id3:'@id3'} ,  cache : true },

                  find1: { method: 'GET', params: {id: '@id'} },
                  findAll: { method: 'GET', isArray: true}      // same as query


           //     $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//                findSpacial:{method:'GET',isArray: false,params: {action:'findSpacial'}},
//                email: { method: 'PUT', params: {action:'email' } }
            }
        )
    }]);

//angular.module('app.services', ['ngResource'])
//    .factory('ServiceA', function ($resource) {
//        return $resource('url/offers', {},
//            {
//                get: { method: 'JSONP', params: {property_code: 'DEMO_ERFOLGX', adults: '2',
//                    callback: 'JSON_CALLBACK'} }
//            }
//        );
//    });
//.factory('ServiceB', function ($resource) {
//    return $resource('url/search.json', {},
//        {
//            get: { method: 'JSONP', params: {property_code: 'DEMO_ERFOLGX', adults: '2',
//                callback: 'JSON_CALLBACK'} }
//        }
//    );
//});

