const sw = {
    path: "/sw.js",
    regiseterServiceWorker: function setup() {
        if (!navigator.serviceWorker) return;

        navigator.serviceWorker.register(`${this.path}`).then(function(regObj) {
            if (regObj.waiting) {
                regObj.waiting.postMessage( { 'skip': 'yes'} );
                return;
            }
            navigator.serviceWorker.addEventListener('controllerchange', function() {
                window.location.reload();
            });
        }).catch(function(err) {
            console.log('Service Worker registration faild: ' + err);
        });
    }
};

sw.regiseterServiceWorker();