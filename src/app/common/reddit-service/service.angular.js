define(['./service'], function(redditService) {
    //keep actual reddit service plain javascript that accepts $http
    //ngRedditService will inject $http for use in angular app
    //this provides flexibility in porting over the actual service to another library/framework
    ngRedditService.$inject = ['$http']
    
    function ngRedditService($http) {
        var service = redditService($http);

        return service;
    }

    return ngRedditService
})