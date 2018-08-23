const myApp = angular.module('myApp', ['ngRoute']);
console.log('js loaded');

myApp.config(function ($routeProvider) {
    console.log('config working');

    $routeProvider.when('/add', {
        templateUrl: '/views/add.html',
        controller: 'AddController as ac'
    })
        .when('/manage', {
            templateUrl: '/views/manage.html',
            controller: 'ManageController as mc'
        })
        .otherwise({
            templateUrl: '/views/404.html'
        });
}); //end of myApp config