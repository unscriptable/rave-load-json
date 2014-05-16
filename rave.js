/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var instantiateJson = require('rave/pipeline/instantiateJson');

var defaultExtensions = [ 'json' ];

exports.create = create;

function create (context) {
	// override extensions if supplied by dev
	var extensions = 'loadJson' in context
		? context.loadJson
		: defaultExtensions;

	return {
		load: [
			{
				extensions: extensions,
				hooks: {
					instantiate: instantiateJson
				}
			}
		]
	};

}
