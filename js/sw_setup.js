
const sw = {
    path: "/sw.js",
    regiseterServiceWorker: function setup() {
        if (!navigator.serviceWorker) return;

        navigator.serviceWorker.register(`${this.path}`).then(function() {
            console.log('Registered!');
        }).catch(function(err) {
            console.log('Service Worker registration faild: ' + err);
        });
    }
};

sw.regiseterServiceWorker();

