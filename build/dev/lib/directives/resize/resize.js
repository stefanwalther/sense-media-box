/*!

* sense-media-box - Include web pages, videos, images and much more into your Qlik Sense app.
* --
* @version v0.4.2
* @link https://github.com/stefanwalther/sense-media-box
* @author Stefan Walther
* @license MIT
*/

/*global define*/
define([
  'angular',
  'qvangular'

], function (angular,qvangular) {
  'use strict';

  qvangular.directive('resize', [
    '$window', function ($window) {
      return {
        link:link,
        restrict: 'A'
      };

      function link(scope, element, attrs) {
        console.log('resize');
        scope.width = $window.innerWidth;
        function onResize(){
          // uncomment for only fire when $window.innerWidth change
          // if (scope.width !== $window.innerWidth)
          {
            scope.width = $window.innerWidth;
            scope.$digest();
          }
        }

        function cleanUp() {
          angular.element($window).off('resize', onResize);
        }

        angular.element($window).on('resize', onResize);
        scope.$on('$destroy', cleanUp);
      }

    }
  ])
});
