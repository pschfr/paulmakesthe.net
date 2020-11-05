// Coordinates of downtown Pittsburgh
var pitt = [40.4406, -79.9959];

// Initiates the map on page load
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		scrollwheel: false,
		center: pitt
	});
}
