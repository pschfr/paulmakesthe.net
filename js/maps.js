function initMap() {
	var pitt = {lat: 40.4406, lng: -79.9959};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: pitt
	});
	var marker = new google.maps.Marker({
		position: pitt,
		map: map
	});
}
