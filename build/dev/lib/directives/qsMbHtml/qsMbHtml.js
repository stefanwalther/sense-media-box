/*!

* sense-media-box - Include web pages, videos, images and much more into your Qlik Sense app.
* --
* @version v0.4.2
* @link https://github.com/stefanwalther/sense-media-box
* @author Stefan Walther
* @license MIT
*/

/*global define*/
define( [
		'underscore',
		'qvangular'
	], function ( _,
				  qvangular ) {
		'use strict';

		qvangular.directive( 'qsMbHtml', function () {

			return {
				restrict: "E",
				link: function ( $scope, $element, $attrs ) {

					var $htmlContainer = $( document.createElement( 'div' ) );

					var render = function () {
						if ( $scope.layout.props.html && $scope.layout.props.html.source ) {
							$htmlContainer.html( $scope.layout.props.html.source );
						}
					};
					render();

					$scope.$watch( 'layout.props.html.source', function ( newVal, oldVal ) {
						if ( newVal ) {
							render();
						}
					} );

					$element.append( $htmlContainer );

				}
			}

		} );

	}
);