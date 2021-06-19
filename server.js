const route = require('./index');
const expressHbs = require('express-handlebars');
var express = require('express');
const bodyParser = require('body-parser');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layout/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views')
app.use(express.static('public'));
app.use(route);

app.get('/', (req,res)=> {
    res.render('upload')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});