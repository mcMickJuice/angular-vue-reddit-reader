define(['./component', 'app/common/module', 'angular'], function(searchComponent, commonModule) {
    var name = 'app.search'

    angular.module(name, [commonModule])
        .component('appSearch', searchComponent)

    return name;
})