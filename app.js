var express = require('express');
var morgan = require('morgan');
var router = require('./app/routes');

var port = process.env.PORT || '9990';

var app = express();

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(require('express-session')({secret: 'keyboard cat', resave: true, saveUninitialized:true}));

require('./controllers/facebookLogin').passportInitialize(app)

app.use('/',router)

app.listen(port, (req, res) => {
    console.log(`Listening and serving on :${port}`)
});