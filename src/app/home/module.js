define(['./component', 'angular'], function(homeComponent) {
    var name = "app.home"

    angular.module(name, [])
        .component('appHome', homeComponent)

    return name;
})