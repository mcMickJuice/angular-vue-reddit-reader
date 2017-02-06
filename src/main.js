require.config({
    paths: {
        'app': 'src/app',
        'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular',
        'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue',
        'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
        'uiRouter': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router',
        'ngStats': 'src/app/ng-stats-bootstrap'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
        'ngStats': {
            deps: ['angular']
        }
    },
    waitSeconds: 15
})