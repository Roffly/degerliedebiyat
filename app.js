var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 80;

var router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Welcome!' });
  console.log(process.memoryUsage())
});

router.get('/takim', function (request, response) {
  response.render('takim.ejs', { title: 'Welcome, student!' });
});

router.get('/iletisim', function (request, response) {
  response.render('iletisim.ejs', { title: 'Welcome, teacher!' });
});

app.use('/', router);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
