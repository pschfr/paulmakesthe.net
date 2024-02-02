# [paulmakesthe.net](https://pschfr.github.io/paulmakesthe.net/)
Made with [Tachyons-Sass](https://github.com/tachyons-css/tachyons-sass), [Jekyll](https://jekyllrb.com), and a custom version of my [LastFM.js](https://github.com/pschfr/LastFM.js).

The lovely monospace font you see there is [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), and [Open Sans](https://fonts.google.com/specimen/Open+Sans) is the body text. I got the circuit board background image from [Hero Patterns](https://www.heropatterns.com/).

### Installing dependencies and running
1. Make sure you have Jekyll and bundler installed.
2. Clone / download this repo, then run `bundle install`.
3. After that completes, run `bundle exec jekyll serve --baseurl=""` with the optional flags `--livereload`, `--open_url`, `--drafts`, or `--host 0.0.0.0`. Read more about Jekyll's build options [here](https://jekyllrb.com/docs/configuration/options/#build-command-options).
4. Visit http://localhost:4000!

##### Running as production
Use `JEKYLL_ENV=production` before your serve command to compile and serve like production (enables Google Analytics and Disqus comments, plus minification).
