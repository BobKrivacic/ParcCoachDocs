var fs = require('fs');

var termsOfUseFn = "./client/views/layouts/terms-of-use.html";
var privacyPolicyFn = "./client/views/layouts/privacy-policy.html";

exports.readFileSync = function(fn) {
  console.log("*** read file Sync: " + fn);
  data = fs.readFileSync(fn);
  return data;  
}

exports.readJsonFile = function(fn, resultFn, errorFn) {
  fs.readFile(fn, function (err, data) {
    if (err) {
      console.log(err);
      if (errorFn) {errorFn(err);}
    } else {
      console.log("Have file: " + fn + "\n : " + data);
      resultFn(JSON.parse(data));
    }
  });
}

exports.privacyPolicy = function(req, res) {
  var data;
  try {
    data = fs.readFileSync(privacyPolicyFn);
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(data);  
    return;
  } catch (e) {
  }
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.end("*** Approval not found, create it ***");
}

exports.termsOfUse = function(req, res) {
  var data;
  try {
    data = fs.readFileSync(termsOfUseFn);
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(data);  
    return;
  } catch (e) {
  }
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.end("*** Approval not found, create it ***");
}
