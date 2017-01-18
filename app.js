/** **
 * Module dependencies
 */

var express = require('express'),
  fileAPI = require('./routes/fileAPI'),
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  deviceApp = module.exports = express(),
  devicePort = 8080;
  
/** **
 * Configuration
 */

// all environments
deviceApp.set('port', devicePort);
deviceApp.set('views', __dirname + '/views');
deviceApp.set('view engine', 'ejs');
deviceApp.use(express.logger('dev'));
deviceApp.use(express.bodyParser());
deviceApp.use(express.json());       // to support JSON-encoded bodies
deviceApp.use(express.urlencoded()); // to support URL-encoded bodies
deviceApp.use(express.methodOverride());
deviceApp.use(express.static(path.join(__dirname, '/client')));
deviceApp.use(deviceApp.router);

/**
 * Routes for API calls
 */

var validServerTokens = ["089uq34oijoiqeuqiur"];

var doServerTokenAuth = function(req, res, next) {
  var token = req.params.token;
  if (serverApp !== deviceApp) {return next();}
  for (var inx in validServerTokens) {
    if (validServerTokens[inx] === token) {
      return next();
    }
  }
  return unauthorized(res);
}

// device API 

deviceApp.get('/consent', fileAPI.approvalForm);
deviceApp.get('/termsofuse', fileAPI.termsOfUse);

// Add headers
deviceApp.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

/**
 * Start Server 
 */

http.createServer(deviceApp).listen(process.env.PORT || deviceApp.get('port'), function () {
    console.log('Patient readmittance device api listening on http port ' + deviceApp.get('port'));
  });



