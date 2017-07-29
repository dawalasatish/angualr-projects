myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('/',{
        url:'/',
        templateUrl : 'templates/home.html',
        controller : 'homeController'
    })
    .state('login',{
    	url:'/login',
    	templateUrl : 'templates/login.html'
    })
    .state('signup',{
        url:'/signup',
        templateUrl : 'templates/signup.html'
    })
    $urlRouterProvider.otherwise('/');
}])