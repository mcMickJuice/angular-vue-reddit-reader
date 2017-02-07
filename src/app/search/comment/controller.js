define(function () {
    function controller() {
        var vm = this;

        vm.toggleReplies = function () {
            vm.showReplies = !vm.showReplies
        }

        //lifecycle hooks

        vm.$onInit = function () {
            vm.showReplies = true;
        }
    }

    return controller
})