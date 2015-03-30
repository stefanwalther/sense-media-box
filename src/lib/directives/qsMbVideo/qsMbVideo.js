/*global define*/
define( [
	'qvangular',
	'./../../js/extensionUtils',
	'text!./qsMbVideo.ng.html',
	'text!./videojs.min.css',

	//no return value
	'./videojs.min'
	//,
	//'./plugins/vjs.vimeo.min'

], function ( qvangular, extensionUtils, ngTemplate, videojsCss ) {
	'use strict';

	qvangular.directive( 'qsMbVideo', function () {

		extensionUtils.addStyleToHeader( videojsCss );

		return {
			restrict: "E",
			template: ngTemplate,
			scope: {
				objectId: '=',
				videoType: '=',
				videoSourceMp4: '=',
				videoSourceVimeo: '=',
				videoPoster: '='
			},
			link: function ( $scope, $element /*, $attrs */ ) {

				var player;

				function getSource () {

					return $scope.videoSourceMp4;

					//
					console.log( '$scope in qsMbVideo', $scope );
					//console.log( 'getSource.videoType', $scope.videoType );
					switch ( $scope.videoType ) {
						case 'video/mp4':
							return $scope.videoSourceMp4;
							break;
						//case 'vimeo':
						//	return $scope.videoSourceVimeo;
						//	break;
						default:
							return '';
							break;
					}
				}

				function getTechOrder () {
					switch ( $scope.videoType ) {
						case 'video/mp4':
							return ["html5"];
							break;
						//case 'vimeo':
						//	return ["vimeo"];
						//	break;
						default:
							return ["html5"];
							break;
					}
				}

				function configVideo () {

					var options = {
						techOrder: getTechOrder(),
						controls: true,
						autoplay: false,
						preload: 'auto',
						poster: $scope.videoPoster
					};

					console.log( 'configVideo.options', options );

					var videoSource = getSource();
					console.log( 'videoSource', videoSource );
					console.log( '$scope', $scope );

					console.log( 'element.first()', $element.find( 'video' )[0] );

					if ( videoSource ) {
						// Todo: Check if we can optimize this, silly duplicated code
						if ( !player ) {

							// Initialization
							player = videojs( $element.find( 'video' )[0], options, function () {
								var mPlayer = this;

								mPlayer.src( {
										type: $scope.videoType,
										src: getSource()
									}
								);
							} );
						} else {

							// Update
							player.src(
								{
									type: $scope.videoType,
									src: getSource()
								}
							)
						}
					}

				}

				$scope.$on( '$destroy', function () {
					if ( player ) {
						player.dispose();
					}
				} );

				$scope.$watchCollection( '[videoType, videoSourceMP4, videoSourceVimeo]', function ( newVal ) {
					configVideo();
				} );

			}
		}

	} );

} );