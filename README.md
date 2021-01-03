# [paulmakesthe.net](https://paulmakesthe.net/)
Made with [Tachyons-Sass](https://github.com/tachyons-css/tachyons-sass), [Jekyll](https://jekyllrb.com), and a custom version of my [LastFM.js](https://github.com/pschfr/LastFM.js).

The lovely monospace font you see there is [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono).

### Installing dependencies and running
1. Clone / download this repo, then run `bundle install --path vendor/bundle`.
2. After that completes, run `bundle exec jekyll serve` with the optional flags `--livereload`, `--open_url`, `--drafts`, or `--host 0.0.0.0`. Read more about Jekyll's build options [here](https://jekyllrb.com/docs/configuration/options/#build-command-options).

### Running as production
Use `JEKYLL_ENV=production bundle exec jekyll serve` to compile and serve like production.
