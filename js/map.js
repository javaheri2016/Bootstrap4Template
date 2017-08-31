  function init_map() {
            var location = new google.maps.LatLng(54.355, 18.645);
            var mapoptions = {
                center: location,
                zoom: 14,
                scrollwheel: false,
                styles:

                    [{
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }]
                    }, {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#4ad02a"
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }]
                    }, {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#bdbdbd"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#eeeeee"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#757575"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e5e5e5"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#9e9e9e"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#4ad02a"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#dadada"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#616161"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#4ad02a"
                        }]
                    }, {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e5e5e5"
                        }]
                    }, {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#eeeeee"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#c9c9c9"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#9e9e9e"
                        }]
                    }]

            };

            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: "img/pin.png",
                title: "Nasze osiedle"
            });
            var map = new google.maps.Map(document.getElementById("map-container"),
                mapoptions);
            marker.setMap(map);
            google.maps.event.addDomListener(window, 'load', init_map);
        }