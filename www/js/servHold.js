angular.module('directory.services', [])
//    .factory('EmployeeService', function($q) {
    .factory('EmployeeService', function ($q, Dentoff, $scope) {
//        var populateCache = function(cacheName, Resource, comboProperty,params) {
//        var populateCache = function () {
//            $scope.method = 'GET';
//            $scope.url = 'http://findadentist.dentalsave.com:8002/Dentoff?callback=JSON_CALLBACK&zip=10009&miles=1&first=0&last=0&practice=0&specialty=0&startpos=0&map=true';
//            // $scope.url = 'http://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero';
//
//
//            $scope.code = null;
//            $scope.response = null;
//            $scope.method = 'JSONP';
//            //  $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//            Dentoff.findAll($scope.url).
//                success(function (res, status) {
//                    $scope.status = status;
//                    $scope.dentists = res.data;
//                    //  $scope.loading = false;
//                    $scope.webcount = $scope.dentists[ $scope.dentists.length - 1].reccount;
//
//                    //  $scope.employees = data;
//                    alert('  $scope.dentists :: ' + $scope.dentists)
//                }).
//                error(function (data, status) {
//                    $scope.data = data || "Request failed";
//                    $scope.status = status;
//                });
//
//        }
        var populateCache = function () {
            var dentists = [
                {"id": 1, "DentistName": "James", "OfficeName": "King", "managerId": 0, "managerName": "", "reports": 4, "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
                {"id": 2, "DentistName": "Julie", "OfficeName": "Taylor", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
                {"id": 3, "DentistName": "Eugene", "OfficeName": "Lee", "managerId": 1, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
                {"id": 4, "DentistName": "John", "OfficeName": "Williams", "managerId": 1, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
                {"id": 5, "DentistName": "Ray", "OfficeName": "Moore", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
                {"id": 6, "DentistName": "Paul", "OfficeName": "Jones", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
                {"id": 7, "DentistName": "Paula", "OfficeName": "Gates", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
                {"id": 8, "DentistName": "Lisa", "OfficeName": "Wong", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
                {"id": 9, "DentistName": "Gary", "OfficeName": "Donovan", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
                {"id": 10, "DentistName": "Kathleen", "OfficeName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
                {"id": 11, "DentistName": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
                {"id": 12, "DentistName": "Steven", "OfficeName": "Wells", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
            ];

        }
//        sscope={};
//       sscope.zip=10009;sscope.miles=1;sscope.first=0;sscope.last=0;sscope.practice=0;sscope.specialty=0;sscope.startpos=0;sscope.map=1;
//        sscope.maxDistance=5;
//        console.log('$scope.zip', sscope.zip)
//        Dentoff.findSpacial( {ZipCode: sscope.zip, maxDistance: sscope.maxDistance, FirstName: sscope.first, LastName: sscope.last,
//           OfficeName: sscope.practice, Special1: sscope.specialty, startpos: sscope.startpos, requireCount: sscope.requireCount}, function (res) {
//////        $http.get(serviceBase).then(
//             alert(res.data)
////
//////                function (results) {
////
//       var employees  = results.data;
//            });

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function () {
                var deferred = $q.defer();
                populateCache();
                deferred.resolve(dentists);
                return deferred.promise;
            },

            findById: function (_id) {
                var deferred = $q.defer();
                var dentist = dentists[_id - 1];
                deferred.resolve(dentist);
                return deferred.promise;
            },

            findByName: function (searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function (element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    });
//
//findByName: function(searchKey) {
//    var deferred = $q.defer();
//    var results = dentists.filter(function(element) {
//        var fullName = element.DentistName ;//   element.firstName + " " + element.lastName;
//        return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
//    });
//    deferred.resolve(results);
//    return deferred.promise;
//},