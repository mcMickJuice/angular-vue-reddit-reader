define(['text!./search.template.html', './controller'], function(template, controller) {

    var component = {
        template: template,
        controllerAs: 'vm',
        controller: controller
    }

    return component
})