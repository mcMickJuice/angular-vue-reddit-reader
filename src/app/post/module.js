define(['./component','angular', './vue/postBridge'], function(postComponent, Vue, postBridge) {
    var name = "app.post";

    angular.module(name, [])
        .component('appPost', postComponent)
        .directive('postBridge', postBridge)
        // .config(['$injector' function($injector) {
        //     Vue.use({
        //         install: function(Vue, options) {
        //             Vue.$injector = $injector
        //         }
        //     })
        // }])

    return name;
})