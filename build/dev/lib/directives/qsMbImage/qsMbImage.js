/*!

* sense-media-box - Include web pages, videos, images and much more into your Qlik Sense app.
* --
* @version v0.4.5
* @link https://github.com/stefanwalther/sense-media-box
* @author Stefan Walther
* @license MIT
*/

/*global define*/
define( [
		'jquery',
		'underscore',
		'qvangular'
	], function ( $, _, qvangular ) {
		'use strict';

		qvangular.directive( 'qsMbImage', function () {

			return {
				restrict: "E",
				scope: {
					img: '=',
					verticalAlign: '=',
					horizontalAlign: '=',
					imageAspectRatio: '='
				},
				template: '<div class="qs-mb-image-container"><img src="{{img}}" title="{{img}}" class="{{verticalAlign}} {{horizontalAlign}} {{imageAspectRatio}}" /></div>'
			}
		} );
	}
);
