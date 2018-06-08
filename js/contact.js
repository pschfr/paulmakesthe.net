// Hides map and form
if (window.location.search.replace('?', '') == 'thanks' || window.location.search.replace('?', '') == 'error') {
	document.getElementsByTagName('form')[0].style.display = 'none';
	document.getElementById('map').style.display = 'none';
}

// Show thanks or error messages
if (window.location.search.replace('?', '') == 'thanks') {
	document.getElementsByTagName('form')[0].parentElement.appendChild(document.createElement('p')).innerHTML = 'Thanks for your message! I\'ll get back to you right away.<br/><br/>Go back <a href="/">home</a>, or read some <a href="/archive">articles</a>.';
} else if (window.location.search.replace('?', '') == 'error') {
	document.getElementsByTagName('form')[0].parentElement.appendChild(document.createElement('p')).innerHTML = 'It seems something went wrong. Please try sending your message again.<br/><br/><a href="javascript:history.back();">Try again.</a>';
}
