///<reference path="typings/GoogleMaps/google.maps.d.ts" />
///<reference path="typings/cordova/cordova.d.ts" />

module CordovaApp {
	export module GoogleMaps {
		export class Map {
			mapid: string;
			self : Map;
			map: google.maps.Map;
			constructor(mapdomid: string) {
				var self = this;
				this.mapid = mapdomid;
				navigator.geolocation.getCurrentPosition(pos => {
					var latLng = new google.maps.LatLng(pos.coords.latitude,
						pos.coords.longitude);
						self.renderMap(latLng);
				});
			}

			renderMap(latLng: google.maps.LatLng) {
				var mapOptions = {
	                zoom: 18,
	                center: latLng,
	                mapTypeId: google.maps.MapTypeId.SATELLITE,
	                mapTypeControl: false,
	                streetViewControl: false
            	};
	            this.map = new google.maps.Map(document.getElementById(this.mapid), 
	               mapOptions);
			}

			renderMarker(latLng: google.maps.LatLng, title: string) : google.maps.Marker {
				return new google.maps.Marker({
					position: latLng,
					map: this.map,
					title: title
				});	
			}

		}
	}
}
