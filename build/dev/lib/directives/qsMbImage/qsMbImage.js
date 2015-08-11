/*global define*/
define( [
		'underscore',
		'qvangular'
	], function ( _, qvangular ) {
		'use strict';

		qvangular.directive( 'qsMbImage', function () {

			return {
				restrict: "E",
				link: function ( $scope, $element, $attrs ) {

					var $img = $( document.createElement( 'img' ) );
					$img.addClass( 'qs-mb-image' );
					$img.id = 'mediabox_' + $scope.layout.qInfo.qId + '_image';

					var render = function () {

						// Source
						if ( $scope.layout.props.image && !_.isEmpty( $scope.layout.props.image.source ) ) {
							$img.attr( 'src', $scope.layout.props.image.source );
							$element.css( 'text-align', $scope.layout.props.image.horizontalAlign );

							// Aspect Ratio
						}

					};
					render();

					$scope.$watchCollection( 'layout.props.image', function ( newval ) {
						//console.log( 'image: render', $scope.layout.props.image );
						render();
					} );

					$element.append( $img );

				}
			}

		} );

	}
);