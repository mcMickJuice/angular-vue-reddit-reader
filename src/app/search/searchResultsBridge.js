define(['vue', '../vue/search/result/Result.vue'],function(Vue, Result) {

    directive.$inject = ['redditService', '$state']

    function directive(redditService, $state) {
        return {
            restrict: 'E',
            scope: {
                results: '=',
                subreddit: '='
            },
            link: function($scope, elem, attrs) {
                var vueInstance = new Vue({
                    el: elem[0],
                    data: {
                        results: [],
                        subreddit: ''
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
                            vm.subreddit = $scope.subreddit;
                        })
                    },
                    methods: {
                        onPostNavigate: function(id) {
                            $state.go('post', {id: id, subreddit: $scope.subreddit})
                            // console.log('navigate to post id ', id)
                        }
                    },
                    template: '<div><result v-for="result in results" :post="result" @on-post-navigate="onPostNavigate"></result></div>',
                    components: {
                        'result': Result
                    }
                })

                $scope.$on('$destroy', function() {
                    vueInstance.$destroy()
                })
            }
        }
    }

    return directive
})