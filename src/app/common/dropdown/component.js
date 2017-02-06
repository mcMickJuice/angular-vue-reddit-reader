define(['text!./dropdown.template.html'], function (template) {
    var component = {
        template: template,
        bindings: {
            options: '<', //should be of form {label, value}
            onSelected: '&', //value
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.showList = function () {
                vm.listIsVisible = true;
            }

            vm.selectOption = function (option) {
                vm.listIsVisible = false;

                vm.selected = option;
                vm.onSelected({ value: option.value })
            }

            //lifecycle hooks

            vm.$onInit = function () {
                vm.selected = vm.options[0]
                vm.listIsVisible = false
            }

        }
    }

    return component
})