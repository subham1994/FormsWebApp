var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(express.static('app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/submitPurchaseVoucher', function(req, res) {
    console.log(req.body);
    res.send('Got a post call, and works correctly');
});

app.listen(PORT, function() {   // starting web server
    console.log('Express listening on port 3000');
});
