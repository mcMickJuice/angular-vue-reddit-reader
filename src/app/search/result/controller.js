define(function () {

    controller.$inject = ['redditService']
    function controller(redditService) {
        var vm = this;


        vm.loadComments = function () {
            redditService.getComments(vm.post.postLink)
                .then(function (comments) {
                    vm.comments = comments;
                    vm.commentsLoaded = true;
                })
        }

        vm.toggleComments = function () {
            vm.commentsHidden = !vm.commentsHidden
        }

        //lifecycle hooks

        vm.$onInit = function () {
            vm.commentsLoaded = false;
            vm.commentsHidden = false;
        }
    }

    return controller
})