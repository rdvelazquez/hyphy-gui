.PHONY: clean all test publish

hyphy:
	echo "installing hyphy"
	@if ! test -d ./.hyphy; then git clone http://github.com/veg/hyphy.git ./.hyphy/; fi
	cd ./.hyphy && git checkout master && git pull && git checkout 2.3.10 && cmake . && make -j 4 HYPHYMP && cd ../

yarn:
	yarn install
	webpack --config webpack.dev.js

all: hyphy yarn

clean:
	rm -rf node_modules
	rm -rf .hyphy

