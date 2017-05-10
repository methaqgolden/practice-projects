
var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope, $http) {
    $scope.arr = [];
    $scope.getPokemon = function () {
        
        $http.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
                $scope.arr = response.data;
                console.log($scope.arr)
            },
            function (err) {

                console.log(err.statusText + " " + err.status);
                console.log(err)

            }

        )
    }
});

//var app = angular.module("myApp", []);
//app.controller("mainCtrl", function ($scope, $http) {
//    $scope.getPokemon = function () {
//        $http.get("http://api.vschool.io:6543/hitlist.json").then(function (data) {
//                $scope.pokemon = data.data.name
//                console.log(data)
//            },
//            function (err) {
//
//                console.log(err.statusText + " " + err.status);
//                console.log(err)
//
//            }
//
//        )
//    }
//});