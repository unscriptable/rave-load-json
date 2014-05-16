# rave-load-json

Adds json loading to rave.js based on file extensions.

By default, rave-load-json loads json when it detects a '.json' file
extension.

You can change this list by adding a `loadJson` property to the context.
In HTML, this can be done by placing a `data-load-json` attribute on the
`<html>` element.  The value of this element should be a comma-separated
list of extensions.

```html
<html data-load-json="json,cfg">
```

When running `rave()` as a module, the `loadText` property may also be
an array of extensions or an object whose keys are file extensions.

```js
context.loadJson = ['json', 'cfg'];
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
