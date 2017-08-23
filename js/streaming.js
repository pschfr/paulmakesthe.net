function lastFM_request() {
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=paul_r_schaefer&api_key=0f680404e39c821cac34008cc4d803db&limit=1&format=json',
		xhr = new XMLHttpRequest();

	xhr.open('GET', lastFMurl, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var obj = JSON.parse(xhr.responseText),
				track = obj.recenttracks.track[0],
				artist = track.artist['\#text'],
				album = track.album['\#text'],
				song = track.name,
				url = track.url,
				img = track.image[1]['\#text'];

			if (img !== '') { // if image exists, print
				document.getElementById('cover').src = img;
				document.getElementById('cover').alt = album;
				document.getElementById('cover').title = album;
			} else { // or print blank album cover
				document.getElementById('cover').src = "img/no-cover.png";
				document.getElementById('cover').alt = "No Cover";
			}

			// prints link to song with artist and song name
			document.getElementById('recenttracks').innerHTML = '<a href="' + url + '" title="on ' + album + '" class="link">' + artist + ' &ndash; ' + song + '</a>';

			// Displays number of tracks scrobbled
			document.getElementById('since').style.visibility = 'visible';
			document.getElementById('number').innerHTML = parseInt(obj.recenttracks["\@attr"].total).toLocaleString();

			// if now playing, print now playing gif
			if (track['\@attr'] && track['\@attr'].nowplaying !== '') {
				document.getElementById('state').innerHTML = 'I am currently listening to:<br/>';
				document.getElementById('nowplaying').style.display = 'inline-block';
			} else {
				document.getElementById('state').innerHTML = 'I am last listened to:<br/>';
				document.getElementById('nowplaying').style.display = 'none';
			}
		} else {
			document.getElementById('recenttracks').innerHTML = 'Nothing, apparently. The connection to Last.fm failed.';
		}
	};
	xhr.send(null); // Close connection
}

// Run every 1 minute
setInterval(function() {
	lastFM_request();
}, 60000);

// Run on load too
lastFM_request();
