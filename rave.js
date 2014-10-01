/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var instantiateJson = require('rave/pipeline/instantiateJson');

var defaultExtensions = [ 'json' ];

exports.create = create;

function create (context) {
	// override extensions if supplied by dev
	var env = context.env;
	var extensions = (env.loadJson && env.loadJson.extensions)
		|| defaultExtensions;

	return {
		load: [
			{
				extensions: extensions,
				hooks: {
					locate: locate,
					instantiate: instantiateJson
				}
			}
		]
	};

}

function locate (load) {
	var metadata = load.metadata;
	metadata.dontAddExt = true;
	return false;
}

