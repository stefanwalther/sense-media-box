/*global module*/
/*jshint
 camelcase: false
 */
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	return {

		options: {
			mangle: ('<%= projectConfig.release.uglify.mangle%>' === 'true'),
			beautify: ('<%= projectConfig.release.uglify.beautify%>' === 'true'),
			preserveComments: ('<%= projectConfig.release.uglify.preserveComments%>' === 'true'),
			compress: {
				drop_console: ('<%= projectConfig.release.uglify.drop_console%>' == 'true')
			}
		},
		release: {
			files: [
				{
					src: ['../dist/<%= projectConfig.general.ExtensionNamespace.toLowerCase() %><%= projectConfig.general.ExtensionNameSafe.toLowerCase()%>.js'],
					dest: '../dist/<%= projectConfig.general.ExtensionNamespace.toLowerCase() %><%= projectConfig.general.ExtensionNameSafe.toLowerCase()%>.js'
				},
				{
					src: ['../dist/initialproperties.js'],
					dest: '../dist/initialproperties.js'
				},
				{
					src: ['../dist/properties.js'],
					dest: '../dist/properties.js'
				},
				{
					src: ['../dist/lib/js/extensionUtils.js'],
					dest: '../dist/lib/js/extensionUtils.js'
				},
				{
					src: ['../dist/lib/directives/qsMbImage/qsMbImage.js'],
					dest: '../dist/lib/directives/qsMbImage/qsMbImage.js'
				},
				{
					src: ['../dist/lib/directives/qsMbVideo/qsMbVideo.js'],
					dest: '../dist/lib/directives/qsMbVideo/qsMbVideo.js'
				},
				{
					src: ['../dist/lib/directives/qsMbWebsite/qsMbWebsite.js'],
					dest: '../dist/lib/directives/qsMbWebsite/qsMbWebsite.js'
				}
			]
		}
	};
};