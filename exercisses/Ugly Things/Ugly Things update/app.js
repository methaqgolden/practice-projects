var app = angular.module("myName", []);
app.controller("data", function ($scope) {
    $scope.arr= [];
    $scope.pic= "";
    $scope.submit = function () {
        var person = {
            tital: $scope.tital,
            imgUrl:$scope.pic,
            descrabition:$scope.descrabition
            
        };
        $scope.arr.push(person);
        
    }
})
//var app = angular.module("myName", []);
//        app.controller('data', ['$scope', function ($scope) {
//            $scope.pic = "http://learnit.visrosoftware.com/datafiles/birds_009_big-400x400.jpg";
//        }]);
