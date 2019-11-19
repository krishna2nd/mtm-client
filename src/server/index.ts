import middlewares from "../middlewares";
// import { json } from 'body-parser';

var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: (req) => /application\/.*json.*/i.test(req.headers["content-type"]) }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

middlewares(app);
app.get('/', serveStatic('dist/public'));
 
app.listen(9090)
