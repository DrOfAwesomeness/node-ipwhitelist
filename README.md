# ipwhitelist

Simple Express middleware for IP Whitelisting. Intended for developers who need to make sure they are the only ones who can access their work-in-progress code when running in a dangerous network enviornment.

## Installation
`npm install ipwhitelist`

## Example usage
```js
var express = require('express');
var ipwhitelist = require('ipwhitelist');
var app = express();
app.use(ipWhitelist(['127.0.0.1','192.168.1.123']));
app.get('/', function(req, res) {
    res.send(200, "Only whitelisted IPs can access this :D");
});
app.listen(1234);
```
## License
MIT
