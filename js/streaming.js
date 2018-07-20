function lastFM_request() {
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=paul_r_schaefer&api_key=0f680404e39c821cac34008cc4d803db&limit=1&format=json',
		xhr = new XMLHttpRequest(),
		d = document;

	xhr.open('GET', lastFMurl, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var obj = JSON.parse(xhr.responseText),
				track = obj.recenttracks.track[0],
				artist = track.artist['\#text'],
				album = track.album['\#text'],
				song = track.name,
				url = track.url,
				img = track.image[1]['\#text'],
				cover = d.getElementById('cover');

			if (img !== '') { // if image exists, print
				cover.src = img;
				cover.alt = album;
				cover.title = album;
			} else { // or print blank album cover
				cover.src = "img/no-cover.png";
				cover.alt = "No Cover";
			}

			// prints link to song with artist and song name
			d.getElementById('recenttracks').innerHTML = '<a href="' + url + '" title="on ' + album + '">' + artist + ' &mdash; ' + song + '</a>';

			// Displays number of tracks scrobbled
			d.getElementById('since').style.visibility = 'visible';
			d.getElementById('number').innerHTML = parseInt(obj.recenttracks["\@attr"].total).toLocaleString();

			// if now playing, print now playing gif
			if (track['\@attr'] && track['\@attr'].nowplaying !== '') {
				d.getElementById('state').innerHTML = 'I am currently listening to:<br/>';
				d.getElementById('nowplaying').style.display = 'inline-block';
			} else {
				d.getElementById('state').innerHTML = 'I last listened to:<br/>';
				d.getElementById('nowplaying').style.display = 'none';
			}
		} else {
			d.getElementById('recenttracks').innerHTML = 'Nothing, apparently. The connection to Last.fm failed.';
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
