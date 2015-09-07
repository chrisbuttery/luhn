# node-luhn

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![js-standard-style][standard-image]][standard-url]

A [Luhn (mod 10) algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm) module for credit card number validation.

## Install

```sh
$ npm install --save node-luhn
```

or:

```sh
$ component install chrisbuttery/luhn
```
## Usage

```js
var isLuhn = require('node-luhn')

isLuhn('4111111111111111')
//=> true
```

## License

MIT © [Chris Buttery](http://chrisbuttery.com)

[npm-image]: https://img.shields.io/npm/v/node-luhn.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-luhn
[travis-image]: https://img.shields.io/travis/chrisbuttery/node-luhn.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisbuttery/node-luhn
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[coveralls-image]: https://img.shields.io/coveralls/chrisbuttery/node-luhn.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chrisbuttery/node-luhn?branch=master
