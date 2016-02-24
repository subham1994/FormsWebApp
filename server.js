var express = require('express'),
     app = express(),
     PORT = process.env.PORT || 3000;

app.use(express.static('app'));

app.listen(PORT, function() {
    console.log('Express listening on port 8080');
});