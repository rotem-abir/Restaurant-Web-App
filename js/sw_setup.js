const sw = {
    path: "/sw.js",
    regiseterServiceWorker: function setup() {
        if (!navigator.serviceWorker) return;

        navigator.serviceWorker.register(`${this.path}`).then(function(regObj) {
            //console.log('Registered!');
            if (regObj.waiting) {
                regObj.waiting.postMessage( { 'skip': 'yes'} );
            }
        }).catch(function(err) {
            console.log('Service Worker registration faild: ' + err);
        });
    }
};

sw.regiseterServiceWorker();