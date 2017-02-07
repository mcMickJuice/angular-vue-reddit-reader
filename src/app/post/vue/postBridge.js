define(['vue', './injectorPlugin'],function(Vue, injectorPlugin) {

    directive.$inject = ['$injector']

    function directive($injector) {
        return {
            restrict: 'E',
            link: function($scope, elem, link) {
                var plugin = injectorPlugin.plugin($injector);

                Vue.use(plugin);


                var mappedServices = injectorPlugin.mapInjector(['redditService'])

                console.log(mappedServices);

                var inst = new Vue({
                    el: elem[0],
                    mounted: function() {
                        console.log(this);
                    }
                })

            }
        }
    }

    return directive
})