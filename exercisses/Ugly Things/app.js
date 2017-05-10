var app = angular.module("myName", []);
app.controller("data", function ($scope) {
    $scope.arr= [];
    $scope.submit = function () {
        var person = {
            tital: $scope.tital,
            imgUrl:$scope.img,
            descrabition:$scope.descrabition,
            
        };
        $scope.arr.push(person);
        
    }
})