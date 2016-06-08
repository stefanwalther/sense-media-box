/*global define*/
define( [
		'qvangular',
		'./../../js/extUtils',
		'text!./qsMbVideo.ng.html',
		'text!./video-js.min.css',

		//no return value
		'./videojs.min',
		// './plugins/Youtube.min',
		// './plugins/Vimeo'

	], function ( qvangular,
				  extUtils,
				  ngTemplate,
				  videojsCss,
				  videojs,
				  pluginYouTube,
				  pluginVimeo ) {
		'use strict';

		qvangular.directive( 'qsMbVideo', function () {

			extUtils.addStyleToHeader( videojsCss );

			return {
				restrict: "E",
				template: ngTemplate,
				scope: {
					objectId: '=',
					videoType: '=',
					videoSourceMp4: '=',
					videoPoster: '=',
					videoSourceVimeo: '=',
					videoSourceYouTube: '='
				},
				link: function ( $scope, $element /*, $attrs */ ) {

					var player;

					function getSource () {

						return $scope.videoSourceMp4;

						switch ( $scope.videoType ) {
							case 'video/mp4':
								return $scope.videoSourceMp4;
								break;
							case 'video/vimeo':
								return $scope.videoSourceVimeo;
								break;
							case 'video/youtube':
								return $scope.videoSourceYouTube;
								break;
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
							case 'video/vimeo':
								return ["vimeo"];
								break;
							case 'video/youtube':
								return ['youtube'];
								break;
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

						var videoSource = getSource();

						if ( videoSource ) {
							if ( !player ) {

								videojs.plugin( 'youtube', pluginYouTube );
								videojs.plugin( 'vimeo', pluginVimeo );

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

								// Update the existing object
								player.src( {
									type: $scope.videoType,
									src: getSource()
								} );
							}
						}

					}

					$scope.$on( '$destroy', function () {
						if ( player ) {
							player.dispose();
						}
					} );

					$scope.$watchCollection( '[videoType, videoSourceMP4, videoSourceVimeo, videoSourceYouTube]', function ( newVal, oldVal ) {
						if ( newVal !== oldVal ) {
							configVideo();
						}
					} );

				}
			}

		} );

	}
)
;
