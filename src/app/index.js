require(['app/home/module'
, 'app/post/module'
, 'app/search/module'
, 'angular'
, 'uiRouter'
, 'ngAnimate'], function (homeModule, postModule, searchModule) {
    
    
    var app = angular.module('app', [homeModule, postModule, searchModule, 'ui.router', 'ngAnimate'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')

            $stateProvider
                // .state('home', {
                //     url: '/',
                //     template: '<app-home></app-home>'
                // })
                .state('search', {
                    url: '/search',
                    template: '<app-search></app-search>'
                })
                .state('post:id', {
                    url: '/',
                    template: '<app-post></app-post>'
                })
        }])

    var mount = document.querySelector('#mount')
    angular.bootstrap(mount, ['app'])
})