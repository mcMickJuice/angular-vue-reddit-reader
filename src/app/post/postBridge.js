define(['vue', '../vue/injectorPlugin', '../vue/post/Post.vue'],function(Vue, injectorPlugin, Post) {

    directive.$inject = ['$injector']

    function directive($injector) {
        return {
            restrict: 'E',
            link: function($scope, elem, link) {
                var plugin = injectorPlugin.plugin($injector);
                
                //this will register $injector with Vue and make it 
                //available in each vue component instance
                Vue.use(plugin);

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