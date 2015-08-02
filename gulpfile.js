var gulp = require('gulp');
var senseGo = require('sense-go');

var userConfig = {
	"packageName": "Your Package Name"
};

senseGo.init( gulp, userConfig,  function (  ) {
	// Your own gulp tasks or task-chains here
	// ...
});