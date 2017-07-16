var gulp = require('gulp'),
	util = require('gulp-util'),
	vftp = require('vinyl-ftp');

gulp.task('default', function() {
	var conn = vftp.create({
		host: 'paulmakesthe.net',
		user: 'username',
		pass: 'password',
		parallel: 8,
		log: util.log,
		debug: util.log
	});
	return gulp.src('_site/**', { buffer: false }).pipe(conn.dest('/public_html/v2'));
});
