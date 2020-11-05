var now = new Date();
document.getElementById('day').innerHTML = now.toLocaleString(window.navigator.language, {weekday: 'long'});
