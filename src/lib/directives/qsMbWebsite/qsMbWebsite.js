/*global define*/
define( [
	'qvangular'
], function ( qvangular ) {
	'use strict';

	qvangular.directive( 'qsMbWebsite', function () {

		return {
			restrict: "E",
			link: function ( $scope, $element, $attrs ) {

				console.info( 'qsMbWebsite' );
				$element.addClass( 'qs-mb-website' );

				var $ifr = $( document.createElement( 'iframe' ) );
				$ifr.id = 'mediabox_' + $scope.layout.qInfo.qId + '_website';
				$ifr.attr( 'frameborder', 0 );

				// see http://www.w3schools.com/tags/att_iframe_sandbox.asp
				$ifr.attr( 'sandbox', 'allow-forms allow-pointer-lock allow-same-origin allow-scripts' );
				$ifr.addClass( 'mb_website' );

				$scope.$watchCollection( 'layout.props.website', function ( newVal ) {
					renderWebsite();
				} );

				var renderWebsite = function () {
					console.log( 'render website', $scope.layout.props.website );

					$ifr.attr( 'src', $scope.layout.props.website.source );

					$ifr.removeClass( 'noscroll' );
					switch ( $scope.layout.props.website.scrollBars ) {
						case "auto":
							break;
						case "none":
							$ifr.addClass( 'noscroll' );
							$ifr.attr( 'scrolling', 'no' );
							break;

						default:
							break;
					}

				};

				renderWebsite();

				$element.append( $ifr );

			}
		}

	} );

} );