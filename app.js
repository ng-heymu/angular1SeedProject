angular.module('angularSeedProject',['ngRoute','ui.bootstrap']);

angular.module('angularSeedProject')
        .constant('MODAL_VIEW_URL','app/users/modal/ModalView.html')
        .value('APPLICATION_URLS', { userUrl : 'https://jsonplaceholder.typicode.com/users'});

angular.module('angularSeedProject')
        .config(function($routeProvider) {
            
             $routeProvider
                .when('/users', {
                    templateUrl : 'app/users/userView.html',
                    controller : 'UsersController',
                    controllerAs : 'vm'
             });
             
              $routeProvider
                .when('/about', {
                    templateUrl : 'app/about/aboutView.html'
             });
            
            
        });