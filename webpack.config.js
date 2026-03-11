/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	devtool: false,
	performance: { hints: false },
	cache: {
		type: 'filesystem'
	},

	entry: path.resolve( __dirname, 'src', 'ckeditor.ts' ),

	output: {
		// The name under which the editor will be exported.
		library: 'ClassicEditor',

		path: path.resolve( __dirname, 'build' ),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	optimization: {
		minimizer: [
			new TerserWebpackPlugin( {
				terserOptions: {
					output: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				},
				extractComments: false
			} )
		]
	},

	plugins: [
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} )
	],

	resolve: {
		extensions: [ '.ts', '.js', '.json' ]
	},

	module: {
		rules: [ {
			test: /\.svg$/,
			use: [ 'raw-loader' ]
		}, {
			test: /\.ts$/,
			loader: 'esbuild-loader',
			options: {
				target: 'es2019'
			}
		}, {
			// Pre-compiled CSS from ckeditor5 dist (no PostCSS processing needed)
			test: /\.css$/,
			include: /node_modules\/ckeditor5\/dist/,
			use: [ {
				loader: 'style-loader',
				options: {
					injectType: 'singletonStyleTag',
					attributes: {
						'data-cke': true
					}
				}
			}, {
				loader: 'css-loader'
			} ]
		}, {
			// CKEditor source CSS (requires PostCSS processing)
			test: /\.css$/,
			exclude: /node_modules\/ckeditor5\/dist/,
			use: [ {
				loader: 'style-loader',
				options: {
					injectType: 'singletonStyleTag',
					attributes: {
						'data-cke': true
					}
				}
			}, {
				loader: 'css-loader'
			}, {
				loader: 'postcss-loader',
				options: {
					postcssOptions: styles.getPostCssConfig( {
						minify: true
					} )
				}
			} ]
		} ]
	}
};
