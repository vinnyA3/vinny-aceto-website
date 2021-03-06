
var webpack = require('webpack'),
		autoprefixer = require('autoprefixer'),
		precss = require('precss');

module.exports = {
	entry: './assets/js/main.js',
	output:{
		path: __dirname,
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000'
			}
		]
	},
	/*plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	],*/
	postcss: function() {
		return [precss, autoprefixer];
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common'
		},
		extensions: ['','.js']
	}
}
