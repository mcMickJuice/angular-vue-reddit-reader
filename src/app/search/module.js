define(['./component'
, 'app/common/module'
, './result/component'
, './comment/component'
, 'angular'], function(searchComponent, commonModule, resultComponent, commentComponent) {
    var name = 'app.search'

    angular.module(name, [commonModule])
        .component('appSearch', searchComponent)
        .component('subredditResult', resultComponent)
        .component('subredditComment', commentComponent)

    return name;
})