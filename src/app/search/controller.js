define(function () {
    controller.$inject = ['redditService']

    function controller(redditService) {
        var vm = this;

        vm.selectSubreddit = function (value) {
            var selected = vm.subreddits.filter(function (s) {
                return s.value === value;
            })[0]

            vm.selectedSubreddit = selected;
            vm.isLoading = true;
            redditService.getSubredditPosts(vm.selectedSubreddit.label)
                .then(function(data) {
                    vm.results = data;
                    vm.isLoading = false;
                })
        }
        vm.toggleVueComponent = function() {
            vm.toggleVue = !vm.toggleVue;
        }

        //lifecycle hooks

        vm.$onInit = function () {
            vm.toggleVue = false;
            vm.subreddits = [
                { value: 0, label: 'all' },
                { value: 1, label: 'nfl' },
                { value: 2, label: 'woahdude' },
                { value: 3, label: 'movies' },
                { value: 4, label: 'greenbaypackers' }
            ]
            vm.results = []

            vm.searchTerm = '';
            vm.selectedSubreddit = vm.subreddits[0]
            vm.isLoading = false;
        }
    }

    return controller;
})