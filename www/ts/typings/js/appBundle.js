///<reference path="typings/GoogleMaps/google.maps.d.ts" />
///<reference path="typings/cordova/cordova.d.ts" />
var CordovaApp;
(function (CordovaApp) {
    var GoogleMaps;
    (function (GoogleMaps) {
        var Map = (function () {
            function Map(mapdomid) {
                this.mapid = mapdomid;
                navigator.geolocation.getCurrentPosition(this.positionReceived);
                this.self = this;
            }
            Map.prototype.renderMap = function (latLng) {
                var mapOptions = {
                    zoom: 18,
                    center: latLng,
                    mapTypeId: google.maps.MapTypeId.SATELLITE,
                    mapTypeControl: false,
                    streetViewControl: false
                };
                var map = new google.maps.Map(document.getElementById(this.mapid), mapOptions);
            };
            Map.prototype.positionReceived = function (data) {
                console.log("Latitude is: " + data.coords.latitude);
                var latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                this.self.renderMap(latLng);
            };
            return Map;
        })();
        GoogleMaps.Map = Map;
    })(GoogleMaps = CordovaApp.GoogleMaps || (CordovaApp.GoogleMaps = {}));
})(CordovaApp || (CordovaApp = {}));
/// <reference path="typings/cordova/cordova.d.ts"/>
/// <reference path="gps.ts" />
var CordovaApp;
(function (CordovaApp) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            receivedEvent('deviceready');
            //var map = new GoogleMaps.Map("map");
        }
        function receivedEvent(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }
        function onPause() {
        }
        function onResume() {
        }
    })(Application = CordovaApp.Application || (CordovaApp.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(CordovaApp || (CordovaApp = {}));
//# sourceMappingURL=appBundle.js.map