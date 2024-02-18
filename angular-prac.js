let myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", { template: "<h1>Home</h1>" })
        .when("/red", { template: "<h1>Red</h1>" })
        .otherwise({ template: "<h1>Invalid Url</h1>" });
});
myApp.component("info", {template:"Hello {{ $ctrl.name }}",controller:function(){
    this.name="Aditya";
}});
myApp.directive('headingHere', function () {
    return {
        template: "<h1>Welcome to this app</h1>"
    };
});
myApp.controller("myCtrl", function ($scope) {
});