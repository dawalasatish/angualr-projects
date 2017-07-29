var myapp = angular.module("myApp",['ui.router']);
myapp.controller("CollapseDemoCtrl",['$scope','$http','$location',function($scope,$http,$location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);