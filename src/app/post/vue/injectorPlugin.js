define(function() {

    function injectorWrapper($injector) {
        var injectorPlugin = {
            install: function(Vue, options) {
                Vue.prototype.$injector = function(service){
                    return $injector.get(service)
                }
            }
        }

        return injectorPlugin
    }

    function mapInjectorService(serviceNames) {
        return function mapInjectorImpl() {
            var obj = serviceNames.reduce(function(acc, next) {
                var service = this.$injector(next);
                //follow vuex getting and look for object
                acc[next] = service;

                return acc;
            }, {})

            return obj
        }
    }

    return {
        plugin: injectorWrapper,
        mapInjector: mapInjectorService
    }
})