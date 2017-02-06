define(function () {
    function loadNgStats() {
        var a = document.createElement("script");
        a.src = "https://rawgit.com/mcmickjuice/ng-stats/master/dist/ng-stats.js";
        a.onload = function () { window.showAngularStats({
            position: 'top-right'
        }); };
        document.head.appendChild(a)
    }

    return loadNgStats;
})