angular.module('directory.controllers', [])

//    .controller('EmployeeIndexCtrl', function ($scope, EmployeeService,Dentoff) {
    .controller('EmployeeIndexCtrl', function ($scope, EmployeeService, $http, $templateCache, $resource, $log,$q) {
        $scope.searchKey = "";
        $scope.zipcode='10009';
        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAllEmployees();
        }


        $scope.search = function () {
         //   EmployeeService.findByName($scope.searchKey).then(function (dentists) {
         //   alert($scope.zipcode)
//                EmployeeService.findAll($scope.zipcode).then(function (dentists) {
//                        $scope.dentists = dentists;
//            });

            var dentistPromise = EmployeeService.findAllNoCache($scope.zipcode);
            dentistPromise.then(function (cache) {

                $scope.dentists = cache.data;
            })
                .catch(function (err) {
                    console.error('accounts failed', err)
                });


        }

        var findAllEmployees = function () {
            console.log('in findAllEmployees')
//            EmployeeService.findAll().then(function (employees) {
//                $scope.employees = employees;
//            });

            //    var serviceBase=  'http://findadentist.dentalsave.com:8002/10009/1/0/0/0/0/0/0?callback=jsonp_callback';
            //  var serviceBase=  'http://findadentist.dentalsave.com:8002/Dentoff?zip=10009&miles=1&first=0&last=0&practice=0&specialty=0&startpos=0&map=true?callback=jsonp_callback';
            //    var serviceBase=  'http://findadentist.dentalsave.com:8002/Dentoff?callback=JSON_CALLBACK' ;
            //'?zip=10009&miles=1&first=0&last=0&practice=0&specialty=0&startpos=0&map=true?callback=jsonp_callback';
//            $http.jsonp( serviceBase, {
//                    params: {
//                        //  screen_name: 'joshdmiller',
//                        //    count: 5,
//                        //   trim_user: true
//                        zip:'10009',
//                        miles:1,
//                        first:0,
//                        last:0,
//                        practice:0,
//                        specialty:0,
//                        startpos:0,
//                        map:false
//
//                    }
//                }).then( function ( response ) {
//                        $scope.employees = response.data;
//                        alert(' $scope.employees '+ $scope.employees )
//                    });

// this works
            $scope.method = 'GET';
//            $scope.url = 'http://findadentist.dentalsave.com:8002/Dentoff?callback=JSON_CALLBACK&zip=10009&miles=1&first=0&last=0&practice=0&specialty=0&startpos=0&map=true';
//            //$scope.url = 'http://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero';
            $scope.code = null;
            $scope.response = null;
            $scope.method = 'JSONP';
//                $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//                    success(function(res, status) {
//                        $scope.status = status;
//                        $scope.dentists = res.data;
//                      //  $scope.loading = false;
//                        $scope.webcount = $scope.dentists[ $scope.dentists.length - 1].reccount;
//
//                      //  $scope.employees = data;
//                        console.log('  $scope.dentists :: ',  $scope.dentists)
//                    }).
//                    error(function(data, status) {
//                        $scope.data = data || "Request failed";
//                        $scope.status = status;
//                    });


    //        $scope.url = 'http://findadentist.dentalsave.com:8002/Dentoff';
    //        $scope.params = {zip: '10009', miles: 1, first: 0, last: 0, practice: 0, specialty: 0, startpos: 0, map: false};
            //   var zip = '90002';
            var dentistPromise = EmployeeService.findAll($scope.zipcode);
            dentistPromise.then(function (cache) {
                //console.log('cac ',cache)
                $scope.dentists = cache.data;
            })
                .catch(function (err) {
                    console.error('accounts failed', err)
                });

        }

        console.log('call findAllEmployees')
        findAllEmployees();

    })

    .controller('EmployeeDetailCtrl', function ($scope, $stateParams, EmployeeService) {
//alert($stateParams._id)
        EmployeeService.findById($stateParams._id).then(function (dentist) {
            $scope.dentist = dentist;


        });
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, EmployeeService) {
    //    EmployeeService.findByManager($stateParams.employeeId).then(function (dentists) {
        console.log('call EmployeeReportsCtrl ',$stateParams.employeeId ,$stateParams._id)
         EmployeeService.findByManager($stateParams.employeeId).then(function (dentists) {

            $scope.dentists = dentists;
        });
    });
