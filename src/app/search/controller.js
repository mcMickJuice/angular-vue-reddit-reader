define(function() {
    function controller() {
        var vm = this;

        vm.subreddits = [
            {value: 0, label:'all'},
            {value: 1, label:'nfl'},
            {value: 2, label:'woahdude'},
            {value: 3, label:'movies'},
            {value: 4, label:'greenbaypackers'}
        ]

        vm.searchTerm = '';
        vm.selectedSubreddit = vm.subreddits[0]

        vm.searchReddit = function() {
            if(vm.searchTerm.length < 3) {
                return;
            }

            //this is if we want a typeahead
            //otherwise we have a search button that kicks off the search
        }

        vm.selectSubreddit = function(value) {
            var selected = vm.subreddits.filter(function(s) {
                return s.value === value;
            })[0]

            vm.selectedSubreddit = selected;
        }
    }

    return controller;
})