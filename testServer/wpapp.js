
var express = require('express');
var bodyParser = require("body-parser"); // Body parser for fetch posted data
var fileUpload = require('express-fileupload');


var app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(fileUpload());




// SERVER ----------------------------------------------

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');//http://localhost:3000
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  next();
});

app.get('/test', function(req, res) {
	res.json({"test":"ok"});
});

app.get('/session/login',function(req,res){
	if (Math.random() > 0.15) {
		res.send();
	} else {
		res.statusCode = 401;
		res.send('None shall pass');
	}
});




var server = app.listen(4000, function() {
	  var host = server.address().address;
	  var port = server.address().port;

	  console.log("Example app listening at http://%s:%s", host, port);
});
