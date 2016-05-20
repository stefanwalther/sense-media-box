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
				template: '<div class="qs-mb-image-container"><img src="{{img}}" class="{{verticalAlign}} {{horizontalAlign}} {{imageAspectRatio}}" /></div>'
			}
		} );
	}
);
