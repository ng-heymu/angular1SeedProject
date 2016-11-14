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
angular.module('angularSeedProject').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/about/aboutView.html',
    "<div class=\"container\"> \n" +
    "<div class=\"well well-lg\">My About Page. Contents coming soon...</div>\n" +
    "</div>"
  );


  $templateCache.put('app/shared/directives/userDetail/userDetailView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">{{user.name}}</div>\n" +
    "    <div class=\"col-md-3\">{{user.username}}</div>\n" +
    "    <div class=\"col-md-3\">{{user.email}}</div>\n" +
    "    <div class=\"col-md-3\"><button ng-click=\"userDetails(user)\">details</button></div>\n" +
    "</div>"
  );


  $templateCache.put('app/users/modal/modalView.html',
    " <div class=\"modal-header\">\n" +
    "            <h3 class=\"modal-title\" id=\"modal-title\">User {{$ctrl.user.name}} business card </h3>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">Name</div>\n" +
    "        <div class=\"col-md-4\"><input type=\"text\" ng-model=\"$ctrl.user.name\"/></div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">UserName</div>\n" +
    "        <div class=\"col-md-4\">{{$ctrl.user.username}}</div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">Email</div>\n" +
    "        <div class=\"col-md-4\">{{$ctrl.user.email}}</div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">Phone</div>\n" +
    "        <div class=\"col-md-4\">{{$ctrl.user.phone}}</div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">Company</div>\n" +
    "        <div class=\"col-md-4\">{{$ctrl.user.company.name}}</div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "        \n"
  );


  $templateCache.put('app/users/userView.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-3\">Name</div>\n" +
    "        <div class=\"col-md-3\">UserName</div>\n" +
    "        <div class=\"col-md-3\">Email</div>\n" +
    "        <div class=\"col-md-3\"></div>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"user in vm.userData\">\n" +
    "        <user-detail user=\"user\"></user-detail>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);

//user controller
angular.module('angularSeedProject')
        .directive('userDetail',function($uibModal,MODAL_VIEW_URL){
            return {
                restrict : 'E',
                scope : { user : '=' },
                templateUrl : 'app/shared/directives/userDetail/userDetailView.html',
                link : function(scope) {
                    
                    scope.userDetails = function(user) {
               
                        $uibModal.open({
                            templateUrl : MODAL_VIEW_URL,
                            size: 'md',
                            controller: 'ModalController',
                            controllerAs: '$ctrl',
                            resolve : {
                                user : function() {
                                    return user;
                                }
                            }
                        });
               
                    };
                    
                }
            };
});

angular.module('angularSeedProject')
        .factory('Users',function($http,$q,APPLICATION_URLS) {
            
            return  {
                getUsers : function() {
                    var defer = $q.defer();
                    
                    $http({
                        method :'GET',
                        url : APPLICATION_URLS.userUrl
                    }).then(function(respone){
                        defer.resolve(respone.data);
                    });
                    
                    
                    return defer.promise;
                }
            }
            
})
angular.module('angularSeedProject')
    .controller('ModalController',function($uibModalInstance,user){

    var $ctrl = this;

    $ctrl.user = user;

});


angular.module('angularSeedProject')
        .controller('UsersController',function($uibModal,MODAL_VIEW_URL,Users) {            
           var vm = this;
           Users.getUsers().then(function successHandler(data){
               vm.userData = data;
           })  
});