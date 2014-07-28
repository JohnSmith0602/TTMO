
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
//    MongoStore = require('connect-mongo')(express),
//    db = require('./models/dbMongoose'),
    settings = require('./settings');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
//app.use(express.session({
//    secret: settings.cookieSecret,
//    store: new MongoStore({
//        db: settings.db
//    })
//}));

// 什么时候执行？
//app.use(function (req, res, next) {
//    console.log('Into use res.locals...');
//    res.locals.success = req.session.success || null;
//    res.locals.error = req.session.error || null;
//    req.session.success = null;
//    req.session.error = null;
//    next();
//});

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

routes(app);

app.on('close', function (err) {
//    db.disconnect();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
