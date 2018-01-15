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
	'qvangular',
	'text!./qsMbWebsite.ng.html'

], function ( $,
			  _,
			  qvangular,
			  ngTemplate ) {
	'use strict';

	qvangular.directive( 'qsMbWebsite', ['$sce', function ( $sce ) {
		return {
			restrict: "E",
			template: ngTemplate,
			scope: {

				/**
				 * Id of the parent object to be inherited by the website object
				 */
				objectId: '=',

				/**
				 * Source Url
				 */
				websiteSource: '=',

				/**
				 * Allow interaction with the website, if false, an overlay will be placed on top of the website.
				 */
				websiteInteraction: '=',

				/**
				 * Iframe scrolling behavior: [auto, none, on]
				 */
				websiteScrollBehavior: '=',

				/**
				 * If we are in edit-mode interaction with the website should always be disabled, otherwise re-sizing the
				 * object doesn't work smoothly.
				 */
				editMode: '='
			},
			controller: ['$scope', function ( $scope ) {
				$scope.trustedSource = '';
			}],
			link: function ( $scope, $element, $attrs ) {

				// console.log('link it');
				var $ifr = $element.find( 'iframe' );

				// Todo: Can be replaced with $watchGroup as soon as AngularJS 1.3 is in place
				$scope.$watchCollection( '[websiteSource, websiteInteraction, websiteScrollBehavior, editMode]', function ( newVal, oldVal ) {
					if ( newVal && newVal !== oldVal ) {
						render();
					}
				} );

				var render = function () {

					//Todo: Add check if Url is valid, otherwise skip resp. return empty string
					if ( _.isEmpty( $scope.websiteSource ) ) {
						$scope.trustedSource = '';
					} else {
						$scope.trustedSource = $sce.trustAsResourceUrl( $scope.websiteSource );
					}

					switch ( $scope.websiteScrollBehavior ) {
						case "auto":
							$scope.iframeScrolling = 'auto';
							break;
						case "none":
							$scope.iframeScrolling = 'no';
							break;
						case "on":
							$scope.iframeScrolling = 'yes';
							break;
						default:
							$scope.iframeScrolling = 'no';
							break;
					}

					// In case that interaction has been disabled scrollbars should always be disabled
					if ( !$scope.websiteInteraction ) {
						$scope.iframeScrolling = 'no';
					}

					$scope.showOverlay = !$scope.websiteInteraction;

					if ( $scope.editMode === true ) {
						$scope.showOverlay = true;
					}

					// Binding to a template doesn't work because the property scrolling doesn't get updated,
					// so we have to re-create the iframe again and again, which is fine for the view mode, but
					// a bit annoying in the edit mode.
					var $ifrPlaceHolder = $element.find( '.iframePlaceHolder' );
					$ifrPlaceHolder.empty();
					var $ifr = $( document.createElement( 'iframe' ) );
					$ifr.id = 'mediabox' + $scope.objectId + '_website';
					$ifr.attr( 'src', $scope.trustedSource );
					$ifr.attr( 'frameborder', 0 );
					$ifr.attr( 'scrolling', $scope.iframeScrolling );

					// see http://www.w3schools.com/tags/att_iframe_sandbox.asp
					$ifr.attr( 'sandbox', 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation' );
					$ifr.addClass( 'mb_website' );
					$ifrPlaceHolder.append( $ifr );
				};

				// https://stackoverflow.com/questions/31622673/angularjs-watch-window-resize-inside-directive
				// console.log('OK, render it ...');
				render();

			}
		}

	}
	] )
	;

} );
