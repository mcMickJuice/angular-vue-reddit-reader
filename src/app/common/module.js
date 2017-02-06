define(['./dropdown/component','angular'], function(dropdownComponent) {
    //common angular components and services

    var name = "app.common"

    angular.module(name, [])
        .component('appDropdown', dropdownComponent)

    return name;
})