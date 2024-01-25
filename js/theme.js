// If system theme is set to dark, set the dark theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// Add proper classes to body
	document.body.className += ' bg-near-black near-white';
	// Remove previous background color class
	document.body.className = document.body.className.replace('bg-washed-blue','');
}
