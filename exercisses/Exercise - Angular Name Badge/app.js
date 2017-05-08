var app = angular.module("myName", []);
app.controller("data", function ($scope) {
    $scope.arr= [];
    $scope.submit = function () {
        var person = {
            firstName: $scope.first,
            lastName:$scope.last,
            Email:$scope.email,
            placeOfBirth:$scope.birth,
            phoneNnm:$scope.phone,
            FavFood:$scope.food,
            information:$scope.info,
        };
        $scope.arr.push(person);
        
    }
})

//var app = angular.module('myApp', []);
//app.controller('myCtrl', function($scope) {
//    $scope.firstname = "John";
//    $scope.lastname = "Doe";
//});

//    $scope.submit = function() {
//        person: [
//            first: "",
//            last: "",
//            email: "",
//            birth: "",
//            phone: "",
//            food: "",
//            info: "",
//        ]
//        
//        $scope.person.first = ""
//    }
