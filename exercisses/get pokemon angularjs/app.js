var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope, $http) {
    $scope.getPokemon = function () {
        $http.get("http://pokeapi.co/api/v2/pokemon/" + $scope.pokeNum).then(function (data) {
                $scope.pokemon = data.data.name
                console.log(data)
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
//    alert("hi")
//    $scope.getPokemon = function () {
//        console.log("hello")
//        $http.get("http://pokeapi.co/api/v2/pokemon/1/").then(function (data) {
//                console.log(data);
//                console.log(data.status);
//            },
//            function (err) {
//                $scope.errHTML = $sce.trustAsHtml(err.data);
//                console.log(err.statusText + " " + err.status);
//                console.log(err)
//
//            }
//       
//     )}
//});
