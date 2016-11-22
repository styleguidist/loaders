// Based on create-react-app
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/webpack.config.dev.js

// Process JS with Babel.
const babel = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
	query: {
		// Don‘t try to find .babelrc because we want to force this configuration.
		babelrc: false,
		presets: [require.resolve('babel-preset-react-app')],
		// This is a feature of `babel-loader` for webpack (not Babel itself).
		// It enables caching results in ./node_modules/.cache/babel-loader/ directory for faster rebuilds.
		cacheDirectory: true,
	},
};

// "css" loader resolves paths in CSS and adds assets as dependencies.
// "style" loader turns CSS into JS modules that inject <style> tags.
const css = {
	test: /\.css$/,
	loader: 'style-loader!css-loader',
};

// JSON is not enabled by default in Webpack but both Node and Browserify allow it implicitly so we also enable it.
const json = {
	test: /\.json$/,
	loader: 'json-loader',
};

// Default loader: load all assets that are not handled by other loaders with the url loader.
// Note: This list needs to be updated with every change of extensions the other loaders match.
// E.g., when adding a loader for a new supported file extension, we need to add the supported extension to this loader too.
// Add one new line in `exclude` for each loader.
//
// "file" loader makes sure those assets get served by WebpackDevServer.
// When you `import` an asset, you get its (virtual) filename.
// "url" loader works like "file" loader except that it embeds assets
// smaller than specified limit in bytes as data URLs to avoid requests.
// A missing `test` is equivalent to a match.
const url = {
	exclude: [
		/\.html$/,
		babel.test,
		css.test,
		json.test,
	],
	loader: 'url-loader',
	query: {
		limit: 10000,
		name: 'static/media/[name].[hash:8].[ext]',
	},
};

module.exports = {
	babel,
	css,
	json,
	url,
	all: [
		babel,
		css,
		json,
		url,
	],
};
