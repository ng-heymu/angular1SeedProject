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
