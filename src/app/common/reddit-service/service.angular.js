define(['./service'], function(redditService) {
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