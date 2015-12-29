
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(function(pos) {
            var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            var mapOptions = {
                zoom: 18,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.SATELLITE,
                mapTypeControl: false,
                streetViewControl: false
            };
            var map = new google.maps.Map(document.getElementById('map'), 
               mapOptions);

            var currentPositionMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: 'Current Position'
            });
        }, function (err) {
            console.log(err);
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();