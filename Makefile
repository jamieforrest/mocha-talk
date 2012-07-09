test:
	/usr/local/bin/mocha --reporter json
	
testtdd:
	/usr/local/bin/mocha test-tdd/ -u tdd --reporter list

.PHONY: test
