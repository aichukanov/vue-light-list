const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	publicPath: isProd ? '/vue-light-list' : '/',
	outputDir: 'docs',
	productionSourceMap: !isProd,
};
