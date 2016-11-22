const loaders = require('./index');

test('return an object', () => {
	expect(typeof loaders).toBe('object');
});

test('expose each loader', () => {
	expect(typeof loaders.babel).toBe('object');
	expect(typeof loaders.css).toBe('object');
	expect(typeof loaders.json).toBe('object');
	expect(typeof loaders.url).toBe('object');
});

test('expose array with all loaders', () => {
	expect(Array.isArray(loaders.all)).toBeTruthy();
});

test('be able to require loaders', () => {
	expect(() => require('babel-loader')).not.toThrow();
	expect(() => require('css-loader')).not.toThrow();
	expect(() => require('style-loader')).not.toThrow();
	expect(() => require('json-loader')).not.toThrow();
	expect(() => require('url-loader')).not.toThrow();
});
