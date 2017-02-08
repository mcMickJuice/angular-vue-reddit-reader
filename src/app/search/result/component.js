define(['text!./result.template.html', './controller'], function(template, controller) {
    var component = {
        template: template,
        controllerAs: 'vm',
        bindings: {
            post: '<',
            subreddit: '<'
        },
        controller: controller
    }

    return component;
})