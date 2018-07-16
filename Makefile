.PHONY: clean all test publish

hyphy:
	echo "which versions of yarn and node are on travis?"
	yarn --version
	node --version
	echo "installing hyphy"
	@if ! test -d ./.hyphy; then git clone http://github.com/veg/hyphy.git ./.hyphy/; fi
	@cd ./.hyphy && git checkout master && git pull && git checkout 2.3.10 && cmake . && make HYPHYMP && cd ../

yarn:
	# setup to ling to rdvelazquez/hyphy-vision until vision version is bumped
	#git clone https://github.com/rdvelazquez/hyphy-vision
	#cd hyphy-vision; git checkout alignment; yarn; webpack --config webpack.config.library.js; yarn link
	#yarn link "hyphy-vision"

	yarn
	webpack --config webpack.dev.js

all: hyphy yarn

clean:
	rm -rf node_modules
	rm -rf .hyphy
	rm -rf hyphy-vision
	rm .appstate.json
