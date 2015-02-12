/*global
 define,
 require,
 window,
 console,
 _
 */
/*jslint    devel:true,
 white: true
 */
define( [
		'jquery',
		'underscore',
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/partials/qsMediaBox.ng.html',
		'text!./lib/css/style.css'
	],
	function ( $, _, props, initProps, extensionUtils, ngTemplate, cssContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

			}]
		};

	} );
