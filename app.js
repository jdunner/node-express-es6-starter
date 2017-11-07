import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';

var mongoose = require('mongoose');
import {Mockgoose} from 'mockgoose';

// import favicon from 'serve-favicon';

import index from './routes/index';
import users from './routes/users';

const app = express();
const debug = Debug('node-starter-es-6:app');

//IF we are in Unit/Int testing, load an inmemory MongoDB for Mockgoose
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
if(!process.env.NODE_ENV === "test"){
    let url = 'mongodb://localhost:27017/nodeExpressStarter';
    mongoose.connect(url, {useMongoClient:true}, function(err, db) {
        if (err) {
            console.log('Unable to connect to the server. Please start the server. Error:', err);
            reject(err);
        } else {
            console.log('Connected to Server successfully!');
        }
    });
}else{
    console.log('Trying to connect to in memory database...');
    let mockgoose = new Mockgoose(mongoose);

    mockgoose.prepareStorage().then(() => {
        mongoose.connect('mongodb://foobar/baz');
        mongoose.connection.on('connected', () => {
            console.log('db connection is now open');
        });
    });
}



// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
