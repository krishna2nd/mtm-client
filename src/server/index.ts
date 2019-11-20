var morgan = require("morgan");

var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.get('/', serveStatic('dist/public'));
 
app.listen(process.env.PORT || 9091)
