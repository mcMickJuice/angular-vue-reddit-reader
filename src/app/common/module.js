define(['./dropdown/component', './reddit-service/service.angular','angular'], function(dropdownComponent, redditService) {
    //common angular components and services

    var name = "app.common"

    angular.module(name, [])
        .component('appDropdown', dropdownComponent)
        .service('redditService', redditService)

    return name;
})