angular.module('directory.services', [])
    .factory('EmployeeService', function ($q, $resource, Dentoff) {
     //   var populateCache = function(cacheName, Resource, comboProperty,params) {

        // prefix on jsonp server ")]}',\n".   to prevent attack
        var caches = {
            pos: {
                data: [],
                combo: [],
                deferred: null
            }
        };
        var deferred2 = null;

        var populateCache = function(cacheName,zip) {
          console.log('populating cache :  ',zip);//cacheName);filt
            var params = {zip:zip,miles:5,first:0,last:0,practice:0,specialty:0,startpos:0,map:false};

            var thisCache = caches[cacheName];
            thisCache.deferred = $q.defer();

//            var url = 'http://findadentist.dentalsave.com:8002/Dentoff';
//            var params = {zip:'90001',miles:1,first:0,last:0,practice:0,specialty:0,startpos:0,map:false};
//            var fadAPI = $resource(url ,
//                { callback: "JSON_CALLBACK" },
//                { get: { method: "JSONP", params:  params ,
//                    isArray: false
//                }});
//            var dentists = fadAPI.get().$promise
//                .then(function (response) {
//                 //console.log('getting po data from server')
//                 thisCache.data = response.data;
//                 thisCache.deferred.resolve(thisCache);
//                })
// CANT USE SERVICCE
           // var action='index';
             Dentoff.fadAPI(params).$promise
                .then(function (response) {
                    // console.log('getting accts data from server')
                    thisCache.data = response.data;
                   // thisCache.combo = comboHelper.buildIndex(thisCache.data, 'POID');
                    thisCache.deferred.resolve(thisCache);
                })
                .catch(function (err) {
                    console.error('EmployeeService::Dentoff failed', err);
                    thisCache.deferred.reject(err);
                });

            return thisCache.deferred.promise;
        };

        var serviceAPI = {

            findAll: function(zip) {
               //console.log('at populateCache ',zip)
                var thisCache = caches.pos;
                if (thisCache.deferred === null) { // never been tried
                    populateCache('pos',zip);//, PO, 'POID',params);/* returns thisCache.deferred.promise */
                }
                //   alert('ad populateCache')
                return thisCache.deferred.promise;
            },

            findAllNoCache: function(zip) {
              //  console.log('at populateCache ',zip)
                var thisCache = caches.pos;
                populateCache('pos',zip);//, PO, 'POID',params);/* returns thisCache.deferred.promise */

                return thisCache.deferred.promise;
            },
//            findById: function(_id) {
//                var deferred = $q.defer();
//                var dentist = employees[_id - 1];
//                deferred.resolve(dentist);
//                return deferred.promise;
//            },
            findById: function(_id) {
                var thisCache = caches.pos;
                if (thisCache.deferred === null) { // never been tried
                    populateCache('pos');/* returns thisCache.deferred.promise */
                }
                var dentist = _.find(thisCache.data, function (po1) {
                    return po1._id == _id;
                });

                var deferred = $q.defer();
                deferred.resolve(dentist);
                return deferred.promise;

            },
            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

//            findByManager: function (managerId) {
//                var deferred = $q.defer(),
//                    results = employees.filter(function (element) {
//                        return parseInt(managerId) === element.managerId;
//                    });
//                deferred.resolve(results);
//                return deferred.promise;
//            }
//
            findByManager: function(_id) {
                // find all dentist in same ZIPCODE
                var thisCache = caches.pos;
                if (thisCache.deferred === null) { // never been tried
                    populateCache('pos');/* returns thisCache.deferred.promise */
                }
                var dentist = _.find(thisCache.data, function (po1) {
                    return po1._id == _id;
                });
                console.log('den ',dentist.ZipCode)
//                var dentists = _.find(thisCache.data, function (po1) {
//                    return po1.ZipCode == dentist.ZipCode;
//                });
              //  var dentists =    _.every(thisCache.data, { 'ZipCode': dentist.ZipCode });
                var dentists = _.filter(thisCache.data, function(po1) { return po1.ZipCode == dentist.ZipCode; });
                console.log('denists every',dentists)
                var deferred = $q.defer();
                deferred.resolve(dentists);
                return deferred.promise;

            }



        }
        return serviceAPI;
    });
