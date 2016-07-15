var express   = require('express'),
bodyParser  = require('body-parser'),
cors        = require('cors'),
mongoose    = require('mongoose');

var widgetCtrl = require('./controllers/widgetCtrl');
var cartCtrl = require('./controllers/cartCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/widget', widgetCtrl.create);
app.get('/widget', widgetCtrl.read);
app.put('/widget/:id', widgetCtrl.update);
app.delete('/widget/:id', widgetCtrl.delete);

app.post('/cart', cartCtrl.create);
app.get('/cart', cartCtrl.read);
app.put('/cart/:id', cartCtrl.update);
app.delete('/cart/:id', cartCtrl.delete);

var mongoUri = "mongodb://localhost:27017/storeApp";
mongoose.connect(mongoUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(8000, function(){
  console.log("listening to 8000");
});
