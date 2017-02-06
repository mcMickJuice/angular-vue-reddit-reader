define(['text!./comment.template.html'], function (template) {
    var component = {
        bindings: {
            comment: '<'
        },
        controllerAs: 'vm',
        template: template,
        controller: function () {
            var vm = this;

            vm.toggleReplies = function () {
                vm.showReplies = !vm.showReplies
            }

            //lifecycle hooks

            vm.$onInit = function () {
                vm.showReplies = true;
            }
        }
    }

    return component;
})