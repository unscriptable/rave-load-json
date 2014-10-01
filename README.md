# rave-load-json

Adds json loading to rave.js based on file extensions.

By default, rave-load-json loads json when it detects a '.json' file
extension.

You can change this list by adding a `loadJson` rave env property.
For example, to detect ".json" and ".config"
extensions, add the following to your app's bower.json or package.json:

```js
{
	"rave": {
		"env": {
			"loadJson": {
				"extensions": [ "json", "config" ]
			}
		}
	}
}
```

## Usage

Importing a json file as a module is easy.  Just import it as if it were
a JavaScript module.

For CommonJS/node-formatted modules (or AMD-wrapped CommonJS):

```js
var config = require('./config.json');
// ...
if (config.isMobile) { /* ... */ }
```

For classic AMD modules:

```js
define(['./config.json'], function (config) {
	// ...
	if (config.isMobile) { /* ... */ }
});
```


For ES6-formatted modules:

```js
import config from './config.json';
// ...
if (config.isMobile) { /* ... */ }
```
