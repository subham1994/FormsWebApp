var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('app'));

app.listen(PORT, function() { // start the server
    console.log('Express listening on port 3000');
});
