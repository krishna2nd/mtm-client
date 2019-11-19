import middlewares from "../middlewares";

var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

middlewares(app);
app.get('/', serveStatic('dist/public'));
 
app.listen(9090)
