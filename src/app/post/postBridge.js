define(['vue', '../vue/injectorPlugin', '../vue/post/Post.vue'],function(Vue, injectorPlugin, Post) {

    directive.$inject = ['$injector']

    function directive($injector) {
        return {
            restrict: 'E',
            link: function($scope, elem, link) {
                var plugin = injectorPlugin.plugin($injector);

                Vue.use(plugin);


                // var mappedServices = injectorPlugin.mapInjector(['redditService'])


                var vueInstance = new Vue({
                    el: elem[0],
                    template: '<post></post>',
                    components: {
                        post: Post
                    }
                })

                $scope.$on('$destroy', function() {
                    //cleanup vue instance when this directive is destroyed
                    vueInstance.$destroy()
                })

            }
        }
    }

    return directive
})