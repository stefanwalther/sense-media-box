/*global define*/
define( [
		'underscore',
		'qvangular'
	], function ( _, qvangular ) {
		'use strict';

		qvangular.directive( 'qsMbHtml', function () {

			return {
				restrict: "E",
				link: function ( $scope, $element, $attrs ) {

					var $htmlContainer = $( document.createElement( 'div' ) );

					var render = function () {
						console.log( 'scope.layout', $scope.layout );
						if ( $scope.layout.props.html && $scope.layout.props.html.source ) {
							console.log( 'we have a source' );
							$htmlContainer.html( $scope.layout.props.html.source );
						}
					};
					render();

					$scope.$watch( 'layout.props.html.source', function ( newVal, oldVal ) {
						console.log( 'Html:newVal', newVal, oldVal );
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