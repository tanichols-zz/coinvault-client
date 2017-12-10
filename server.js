const express = require('express')
var path = require('path');
var morgan = require('morgan')

const app = express()

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'))

app.use(morgan('combined'))

// For all requests, send back index.html
// so that PathLocationStrategy can be used
app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080)
