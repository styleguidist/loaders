# Basic Webpack loaders for JavaScript apps

[![Build Status](https://travis-ci.org/styleguidist/webpack-loaders.svg)](https://travis-ci.org/styleguidist/webpack-loaders)
[![npm](https://img.shields.io/npm/v/webpack-loaders.svg)](https://www.npmjs.com/package/webpack-loaders)

Basic Webpack loaders:

* `babel-loader` with [babel-preset-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/babel-preset-react-app) preset
* `css-loader` and `style-loader`
* `json-loader`
* `file-loader` for images, fonts, etc.
* `url-loader` for other media files

Based on [create-react-app](https://github.com/facebookincubator/create-react-app) but don’t include Autoprefixer.

## Usage with [React Styleguidist](https://github.com/styleguidist/react-styleguidist)

```
npm install --save-dev webpack-loaders
```

```javascript
// styleguide.config.js
const loaders = require('webpack-loaders');
module.exports = {
	components: 'lib/components/**/[A-Z]*.js',
	webpackConfig: {
		module: {
      // Enable all loaders
			loaders: loaders.all,

      // OR only needed loaders
			loaders: [
        loaders.babel,
        loaders.css,
        loaders.file,
        loaders.url,
        // Other loaders for your styleguide
      ],
		},
	},
};
```

## Changelog

The changelog can be found on the [Releases page](https://github.com/styleguidist/webpack-loaders/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Artem Sapegin](http://sapegin.me) and [contributors](https://github.com/styleguidist/webpack-loaders/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
