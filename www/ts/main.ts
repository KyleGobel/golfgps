/// <reference path="typings/cordova/cordova.d.ts"/>
/// <reference path="gps.ts" />
module CordovaApp {
	"use strict";

	export module Application {
		map: GoogleMaps.Map;
		export function initialize() {
			document.addEventListener('deviceready', onDeviceReady, false);
		}

		function onDeviceReady() {
			var map = new GoogleMaps.Map("map");
			document.addEventListener('pause', onPause, false);
			document.addEventListener('resume', onResume, false);

			document.getElementById('markposition').addEventListener('click', c => {
				navigator.geolocation.getCurrentPosition(geo => {
					var latLng = new google.maps.LatLng(geo.coords.latitude, geo.coords.longitude);
					map.renderMarker(latLng, 'Marked Position');
				})
			});

			navigator.geolocation.getCurrentPosition(geo => {
				document.getElementById('lat').innerHTML = geo.coords.latitude + '\xB0';
				document.getElementById('long').innerHTML = geo.coords.longitude + '\xB0';
				document.getElementById('accurateTo').innerHTML = geo.coords.accuracy + ' units';
			});
		}

		function onPause() {
		}

		function onResume() {
		}
	}

	window.onload = function () {
		Application.initialize();
	}
}
