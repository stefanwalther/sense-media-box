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
				value: "website",
				label: "Web site"
			},
			{
				value: "video",
				label: "Video"
			}
		]
	};

	// ****************************************************************************************
	// Other Settings
	// ****************************************************************************************

	var testSetting = {
		ref: "settings.test",
		label: "Test Setting:",
		type: "string",
		expression: "optional",
		show: true
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			settings: {
				type: "items",
				label: "Settings",
				items: {
					testSetting: testSetting
				}
			}
		}
	};

	var behaviorPanel = {
		items: {
			type: {
				type: "items",
				label: "Behavior",
				items: {
					ddType: mbType
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
			behaviorPanel: behaviorPanel

		}
	};

} );
