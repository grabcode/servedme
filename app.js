var subdomain = require('express-subdomain')
var express = require('express')
var app = express()

//subdomains blog
var blog = express.Router()

blog.get('/', function(req, res) {
  res.send('blog root');
})

blog.get('/stuff', function(req, res) {
  res.send('blog stuff')
})

app.use(subdomain('blog', blog))

//subdomains static
app.use(subdomain('static', express.static('public')))

//main site
app.get('/', function (req, res) {
  res.send('Served !')
})

app.get('/stuff', function (req, res) {
  res.send('Server stuff !')
})

// starting server
var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Served listening at http://%s:%s', host, port)

})
