define(['./service', 'fetch'],function(service) {
    var httpClient = {
        get: function(url) {
            return fetch(url)
                .then(function(response) {
                    return response.json()
                })
                .then(function(data) {
                    return {
                        data: data
                    }
                })
        }
    }

    return service(httpClient);
})