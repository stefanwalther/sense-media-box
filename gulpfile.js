var gulp = require('gulp');
var senseGo = require('sense-go');

var userConfig = {
	"packageName": "sense-media-box"
};

senseGo.init( gulp, userConfig,  function (  ) {
	// Your own gulp tasks or task-chains here
	// ...
});