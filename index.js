// Based on create-react-app

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

// "file" loader makes sure those assets get served by WebpackDevServer.
// When you `import` an asset, you get its (virtual) filename.
const file = {
	test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
	loader: 'file-loader',
	query: {
		name: 'static/media/[name].[hash:8].[ext]',
	},
};

// "url" loader works just like "file" loader but it also embeds assets smaller than specified size as data URLs
// to avoid requests.
const url = {
	test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
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
	file,
	url,
	all: [
		babel,
		css,
		json,
		file,
		url,
	],
};
