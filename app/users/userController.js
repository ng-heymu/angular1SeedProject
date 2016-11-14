angular.module('angularSeedProject')
        .controller('UsersController',function($uibModal,MODAL_VIEW_URL,Users) {            
           var vm = this;
           Users.getUsers().then(function successHandler(data){
               vm.userData = data;
           })  
});