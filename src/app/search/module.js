define(['./component'
, 'app/common/module'
, './result/component'
, './comment/component'
, './searchResultsBridge'
, 'angular'], function(searchComponent, commonModule, resultComponent, commentComponent, searchResultsVue) {
    var name = 'app.search'

    angular.module(name, [commonModule])
        .component('appSearch', searchComponent)
        .component('subredditResult', resultComponent)
        .component('subredditComment', commentComponent)
        .directive('searchResultsVue', searchResultsVue)

    return name;
})