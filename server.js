var express = require ('express');
// config = require('./server/donfigure');
app = express();

//defining app level constants?
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
// app = config(app);

//creating HTTP server and tell it to listen for connections
app.get('/', function(req, res){
	res.send('Hello World');
});
app.listen(app.get('port'), function(){
	console.log('Server up: http://localhost:' + app.get('port'));
});