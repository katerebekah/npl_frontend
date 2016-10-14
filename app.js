(function(){
    angular.module('npl', ['ngRoute', 'LocalStorageModule']);

    angular.module('npl').config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpController',
        controllerAs: 'signup'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

    var serviceBase = 'http://localhost:63845/';
    angular.module('npl').constant('ngAuthSettings', {
        apiServiceBaseUri: serviceBase,
        clientId: 'ngAuthApp'
    });

     angular.module('npl').config(function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptorService');
    });

    angular.module('npl').run(['AuthService', function (AuthService) {
        AuthService.GetUserAuth();
    }]);

})();