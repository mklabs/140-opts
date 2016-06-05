all: help

help:
	bake -h

lst: init-help

init-help:
	bake init -h

test:
	node test

release: version push publish

version:
	standard-changelog -v

push:
	git push origin master --tags

publish:
	npm publish
