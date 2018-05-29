function lastFM_request() {
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=paul_r_schaefer&api_key=0f680404e39c821cac34008cc4d803db&limit=10&format=json',
		xhr = new XMLHttpRequest(),
		element = document.getElementById('artists');

	xhr.open('GET', lastFMurl, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var obj = JSON.parse(xhr.responseText),
				artists = obj.topartists.artist;

			// Empty element
			element.innerHTML = '';

			// Loop over artists, appending to page
			for (var i = 0; i < artists.length; i++) {
				var linkText = '<a href="' + artists[i].url + '" class="grow dib tc w-20-ns w-50 pa2 mb4">',
					imgText = '<img src="' + artists[i].image[2]['\#text'] + '" alt="' + artists[i].name + '" /><br/>',
					artistText = '<strong>' + artists[i].name + '</strong><br/>',
					artistPlays = '<small>' + parseInt(artists[i].playcount).toLocaleString() + ' plays</small>'
					linkEnd = '</a>';
				element.innerHTML += linkText + imgText + artistText + artistPlays + linkEnd;
			}

		} else {
			element.innerHTML = 'Unfortunately, the connection to Last.fm failed.';
		}
	};
	xhr.send(null); // Close connection
}

// Run on load
lastFM_request();
