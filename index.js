// include modules
var    express = require('express'),
    app = express(),
    path = require('path');
    

// serve static content
app.use(express.static(path.join(__dirname, './')));

// setup server
var server = app.listen(80);
