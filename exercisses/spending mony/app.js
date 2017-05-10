var app = angular.module("myApp", []);
app.controller("balance", function ($scope) {
    $scope.income = 0;
    $scope.spending = 0;
    $scope.income1 = 0;
    $scope.spending1 = 0;
    $scope.income2 = 0;
    $scope.spending2 = 0;
    $scope.submit = function () {

        $scope.balance = $scope.income - $scope.spending + $scope.income1 - $scope.spending1 + $scope.income2 - $scope.spending2;

    }

});





