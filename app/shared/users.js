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