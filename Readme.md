# Basic Webpack loaders for JavaScript apps

[![Build Status](https://travis-ci.org/styleguidist/loaders.svg)](https://travis-ci.org/styleguidist/loaders)
[![npm](https://img.shields.io/npm/v/loaders.svg)](https://www.npmjs.com/package/loaders)

Basic Webpack loaders:

* `babel-loader` with [babel-preset-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/babel-preset-react-app) preset
* `css-loader` and `style-loader`
* `json-loader`
* `url-loader` for all other files

Based on [create-react-app](https://github.com/facebookincubator/create-react-app) but don’t include Autoprefixer.

## Usage with [React Styleguidist](https://github.com/styleguidist/react-styleguidist)

```
npm install --save-dev loaders
```

```javascript
// styleguide.config.js
const loaders = require('loaders');
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
        loaders.url,
        // Other loaders for your styleguide
      ],
    },
  },
};
```

## Changelog

The changelog can be found on the [Releases page](https://github.com/styleguidist/loaders/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Artem Sapegin](http://sapegin.me) and [contributors](https://github.com/styleguidist/loaders/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
