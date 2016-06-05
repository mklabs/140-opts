all: help

help:
	bake -h

lst: init-help

init-help:
	bake init -h

test:
	node test

release: ci version npmv push publish

ci:
	git commit -m 'feat: vnext'

version:
	standard-changelog -v > CHANGELOG.md

npmv:
	npm version minor

push:
	git push origin master --tags

publish:
	npm publish
