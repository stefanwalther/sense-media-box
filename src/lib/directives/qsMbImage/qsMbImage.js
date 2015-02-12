/*global define*/
define( [
	'qvangular'
], function ( qvangular ) {
	'use strict';

	qvangular.directive( 'qsMbImage', function () {

		return {
			restrict: "E",
			link: function ( $scope, $element, $attrs ) {

				console.info( 'qsMbImage' );
				$element.html( 'image' );

				var $img = $( document.createElement( 'img' ) );
				$img.addClass( 'qs-mb-image' );
				$img.id = 'mediabox_' + $scope.layout.qInfo.qId + '_image';

				var render = function () {

					// Source
					$img.attr( 'src', $scope.layout.props.image.source );

					// Aspect Ratio

				};
				render();

				$scope.$watchCollection( 'layout.props.image', function ( newval ) {
					render();
				} );

				$element.append( $img );

			}
		}

	} );

} );