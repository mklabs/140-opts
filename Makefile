all: help

help:
	bake -h

lst: init-help

init-help:
	bake init -h

test:
	node test

release: ci version push publish

ci:
	git commit -am 'feat: vnext'

version:
	standard-changelog -v > CHANGELOG.md; npm version minor

push:
	git push origin master --tags

publish:
	npm publish
