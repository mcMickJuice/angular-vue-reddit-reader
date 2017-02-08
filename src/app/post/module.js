define(['./component','angular', './postBridge'], function(postComponent, Vue, postBridge) {
    var name = "app.post";

    angular.module(name, [])
        .component('appPost', postComponent)
        .directive('postBridge', postBridge)

    return name;
})