define(['text!./comment.template.html', './controller'], function (template, controller) {
    var component = {
        bindings: {
            comment: '<'
        },
        controllerAs: 'vm',
        template: template,
        controller: controller
    }

    return component;
})