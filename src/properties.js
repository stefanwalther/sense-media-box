/*global define*/
define( [], function () {
	'use strict';

	// ****************************************************************************************
	// MediaBox Type
	// ****************************************************************************************
	var mbType = {
		type: "string",
		ref: "props.mbType",
		component: "dropdown",
		label: "Mediabox type",
		options: [
			{
				value: "image",
				label: "Image"
			},
			{
				value: "video",
				label: "Video"
			},
			{
				value: "website",
				label: "Web site"
			}
		]
	};

	// ****************************************************************************************
	// Image
	// ****************************************************************************************
	var imageProps = {
		items: {
			imageSource: {
				type: "string",
				ref: "props.image.source",
				label: "Image source (Url)",
				expression: "optional",
				show: function ( data ) {
					return true;
				}
			}
		}
	};

	// ****************************************************************************************
	// Video
	// ****************************************************************************************

	var videoProps = {
		items: {
			videoSource: {
				type: "string",
				ref: "props.video.source",
				label: "Video source (Url)",
				expression: "optional",
				show: function ( data ) {
					return true
				}
			}
		}
	};

	// ****************************************************************************************
	// Website
	// ****************************************************************************************

	var websiteProps = {
		items: {
			settings: {
				type: "items",
				label: "Source",
				items: {
					websiteSource: {
						ref: "props.website.source",
						label: "Web site (Url):",
						type: "string",
						expression: "optional",
						show: function ( data ) {
							return true
						}
					},
					websiteScrollbars: {
						ref: "props.website.scrollBars",
						label: "Scrollbars",
						type: "string",
						component: "dropdown",
						options: [
							{
								value: "auto",
								label: "Auto"
							},
							{
								value: "both",
								label: "Both"
							},
							{
								value: "none",
								label: "None"
							},

							{
								value: "vertical",
								label: "Only vertical"
							},
							{
								value: "horizontal",
								label: "Only horizontal"
							}
						],
						defaultValue: "none"
					},
					websiteNoInteraction: {
						ref: "props.website.interaction",
						label: "Interaction",
						type: "boolean",
						component: "switch",
						options: [
							{
								value: true,
								label: "On"
							},
							{
								value: false,
								label: "Off"
							}
						],
						defaultValue: false
					}
				}
			}
		}
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearancePanel = {
		uses: "settings"
	};

	var mediaboxPanel = {
		type: "items",
		component: "accordion",
		items: {
			type: {
				label: "Behavior",
				items: {
					ddType: mbType,
					imageProps: imageProps,
					videoProps: videoProps,
					websiteProps: websiteProps
				}
			}
		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearancePanel,
			behaviorPanel: mediaboxPanel

		}
	};

} );
