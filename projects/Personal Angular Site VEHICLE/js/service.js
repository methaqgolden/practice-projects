
var app = angular.module("mySvc", []);
app.service("todoReq", function ($http) {
    this.getWebsite = function () {
        return $http.get("https://itunes.apple.com/search?term=beyonce&entity=musicVideo");
    };

});


