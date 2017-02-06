define(['vue', './result/Result.vue'],function(Vue, Result) {

    directive.$inject = ['redditService']

    function directive(redditService) {
        return {
            restrict: 'E',
            scope: {
                results: '='
            },
            link: function($scope, elem, attrs) {
                var vueInstance = new Vue({
                    el: elem[0],
                    data: {
                        results: []
                    },
                    mounted: function() {
                        var vm = this;
                        $scope.$watch(function() {
                            return $scope.results
                        }, function(newResults) {
                            if(newResults == null) {
                                return
                            }

                            vm.results = newResults;
                        })
                    },
                    template: '<div><result v-for="result in results" :post="result"></result></div>',
                    components: {
                        'result': Result
                    }
                })
            }
        }
    }

    return directive
})