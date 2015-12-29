///<reference path="typings/GoogleMaps/google.maps.d.ts" />
///<reference path="typings/cordova/cordova.d.ts" />
var CordovaApp;
(function (CordovaApp) {
    var GoogleMaps;
    (function (GoogleMaps) {
        var Map = (function () {
            function Map(mapdomid) {
                var self = this;
                this.mapid = mapdomid;
                navigator.geolocation.getCurrentPosition(function (pos) {
                    var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                    self.renderMap(latLng);
                });
            }
            Map.prototype.renderMap = function (latLng) {
                var mapOptions = {
                    zoom: 18,
                    center: latLng,
                    mapTypeId: google.maps.MapTypeId.SATELLITE,
                    mapTypeControl: false,
                    streetViewControl: false
                };
                this.map = new google.maps.Map(document.getElementById(this.mapid), mapOptions);
            };
            Map.prototype.renderMarker = function (latLng, title) {
                return new google.maps.Marker({
                    position: latLng,
                    map: this.map,
                    title: title
                });
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
        map: CordovaApp.GoogleMaps.Map;
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            var map = new CordovaApp.GoogleMaps.Map("map");
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            document.getElementById('markposition').addEventListener('click', function (c) {
                navigator.geolocation.getCurrentPosition(function (geo) {
                    var latLng = new google.maps.LatLng(geo.coords.latitude, geo.coords.longitude);
                    map.renderMarker(latLng, 'Marked Position');
                });
            });
            navigator.geolocation.getCurrentPosition(function (geo) {
                document.getElementById('lat').innerHTML = geo.coords.latitude + '\xB0';
                document.getElementById('long').innerHTML = geo.coords.longitude + '\xB0';
                document.getElementById('accurateTo').innerHTML = geo.coords.accuracy + ' units';
            });
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