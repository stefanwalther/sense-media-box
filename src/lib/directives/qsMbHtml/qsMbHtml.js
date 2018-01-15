/*global define*/
define([
    'qvangular',
    'text!./qsMbHtml.ng.html'
  ], function (qvangular, ngTemplate) {
    'use strict';

    qvangular.directive('qsMbHtml', function () {

      return {
        restrict: "E",
        scope: {
          htmlSource: '=',
          htmlScrollBehavior: '='
        },
        template: ngTemplate,
        controller: ['$scope', function ( $scope ) {

          $scope.setScrollingClass = function() {
            var ret = null;
            switch ($scope.htmlScrollBehavior) {
              case 'auto':
                ret= 'scrolling-auto';
                break;
              case 'always':
                ret = 'scrolling-always';
                break;
              case 'none':
                ret = 'scrolling-none';
                break;
              default:
                ret = 'scrolling-auto';
            }
            $scope.scrolling = ret;
          };
          $scope.setScrollingClass();

        }],
        link: function ( $scope ) {

          $scope.$watchCollection( '[htmlScrollBehavior]', function ( newVal, oldVal ) {
            if ( newVal && newVal !== oldVal ) {
              $scope.setScrollingClass();
            }
          } );
        }
      }
    });
  }
);