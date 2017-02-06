define(['./component','angular'], function(postComponent) {
    var name = "app.post";

    angular.module(name, [])
        .component('appPost', postComponent)

    return name;
})