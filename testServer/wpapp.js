
var express = require('express');
var bodyParser = require("body-parser"); // Body parser for fetch posted data
var fileUpload = require('express-fileupload');
var path = require("path");
var fs = require("fs");
var multer  = require('multer')
var upload = multer({ dest: 'data/' })


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({uploadDir:'./data'));
//app.use(bodyParser.json());
//app.use(fileUpload());




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

var batchDocUploads = upload.fields([{ name: 'csv', maxCount: 1 }, { name: 'template', maxCount: 1 }]);

app.post('/lawsuit/batch-documents', batchDocUploads, function(req, res) {
    console.log('------------------------------------');
    console.log('BODY',req.body);
    console.log('FILES',req.files);
    var csv = req.files.csv[0];
    fs.rename(csv.path, path.join(__dirname, "data/"+ csv.originalname), function(err) {
           if (err) {
               res.status(500).send(err);
           }
           else {
              console.log('File uploaded');
              //  res.send('File uploaded!');
               sendChunk(res);
           }
       });
});


// app.get('/big', function(req, res) {
//     // res.sendFile('/home/helo/workspace/react/rexo-app/testServer/downloads/01 - Intro.flac')
//     //res.sendFile('/home/helo/workspace/react/rexo-app/testServer/downloads/f1.mp4')
// });

app.get('/chunk', function(req, res) {
  sendChunk(res);
});

function sendChunk(res, i, delay) {
  delay || (delay=100)
  i!=null || (i=200)
  if (i > 0) {
    setTimeout(() => {
      res.write("chunk -----------------------------------------------------------------"+i);
      res.flush()
      console.log('send chunk',i);
      sendChunk(res, i-1)
    }, delay)
  } else {
    res.end();
  }
}

var server = app.listen(4000, function() {
	  var host = server.address().address;
	  var port = server.address().port;

	  console.log("Example app listening at http://%s:%s", host, port);
});
