require(['app/home/module', 'app/post/module', 'app/search/module', 'angular', 'uiRouter'], function (homeModule, postModule, searchModule) {
    
    
    var app = angular.module('app', [homeModule, postModule, searchModule, 'ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')

            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<app-home></app-home>'
                })
                .state('search', {
                    url: '/search',
                    template: '<app-search></app-search>'
                })
                .state('post:id', {
                    url: '/post',
                    template: '<app-post></app-post>'
                })
        }])

    var mount = document.querySelector('#mount')
    angular.bootstrap(mount, ['app'])
})