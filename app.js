const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./i18n/translation.en.json')
 
app.use('/img', express.static('img'))
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/');

app.get('/', function(req, res) {
    res.render('index.mustache', data);
});
  
app.listen(3000);