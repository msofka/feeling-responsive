all: bib
	bundle exec jekyll serve --config _config.yml,_config_dev.yml

bib:
	cp "`kpsewhich 'Leon Moonen Publications.bib'`" assets/publications_leon_moonen.bib
