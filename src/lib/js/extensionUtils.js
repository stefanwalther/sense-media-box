/*global define*/
define( [
	'jquery',
	'underscore'
], function ( $, _ ) {
	'use strict';

	return {

		/**
		 * Add a style to the document's header.
		 * @param cssContent (String)
		 */
		addStyleToHeader: function ( cssContent ) {
			$( "<style>" ).html( cssContent ).appendTo( "head" );
		},
		addStyleLinkToHeader: function ( linkUrl ) {
			var $styleLink = $( document.createElement( 'link' ) );
			$styleLink.attr( 'rel', 'stylesheet' );
			$styleLink.attr( 'type', 'text/css' );
			$styleLink.attr( 'href', linkUrl );
			$( 'head' ).append( $styleLink );
		}

	};

} );
