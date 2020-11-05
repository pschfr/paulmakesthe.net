// Coordinates of downtown Pittsburgh
var pitt = {lat: 40.4406, lng: -79.9959};

// Initiates the map on page load
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		scrollwheel: false,
		center: pitt
	});
}
