define(['./service'], function(redditService) {
    //keep actual reddit service plain javascript that accepts $http
    //ngRedditService will inject $http for use in angular app
    //this provides flexibility in porting over the actual service to another library/framework
    ngRedditService.$inject = ['$http']
    
    function ngRedditService($http) {

        var httpClient = {
            get: function(url) {
                return $http(url)
                    .then(function(response) {
                        return response.data;
                    })
            }
        }
        var service = redditService($http);

        return service;
    }

    return ngRedditService
})