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
		'angular',
		'./properties',
		'./initialproperties',
		'./lib/js/extUtils',
		'text!./lib/partials/qsMediaBox.ng.html',
		'text!./lib/css/main.css',

		//no return values
		'./lib/directives/qsMbImage/qsMbImage',
		'./lib/directives/qsMbVideo/qsMbVideo',
		'./lib/directives/qsMbWebsite/qsMbWebsite',
		'./lib/directives/qsMbHtml/qsMbHtml'
		
	],
	function ( $, _, angular, props, initProps, extensionUtils, ngTemplate, cssContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

				$scope.getImageUrl = function () {

					switch ( $scope.layout.props.mbType ) {
						case "image":
							return $scope.layout.props.image.source;
							break;
						case "imageFromLib":
							return $scope.layout.props.imageFromLib.url;
							break;
						default:
							return '';
					}
				};
			}]
		};

	} );
