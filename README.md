# My Choice Children's Homes

A Pro-active Approach to the Development of Young People

## Installation

1. npm install
2. bower install
3. Ensure sass is installed http://sass-lang.com/install
3. Terminal 1: gulp nodemon
4. Terminal 2: gulp
5. Go to http://localhost:8000

## Prerender
To test pre-rendering html locally:

1. Go to https://prerender.io/
2. Create an account
3. Copy your api token
4. Create a file called config.js
5. Past the following:

```javascript
module.exports = {
  prerender: 'YOUR-API-TOKEN',
};
```
6. Then follow the documentation here:
https://prerender.io/documentation

To switch it off:

1. Comment out the following in app.js

```
const PrerenderPlugin = require('hapi-prerender');
const config = require('./config');

server.register({
  register: PrerenderPlugin,
  options: {
    token: config.prerender,
  },
});
```

## Tests
1. gulp test

Code coverage also generated under ./coverage

## License

Copyright (c) 2016, My Choice Children's Homes - All rights reserved
