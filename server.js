
const expressHbs = require('express-handlebars');
var express = require('express');
const AWS = require('aws-sdk');
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const BUCKET_NAME = 'bcit-test';
const fs = require('fs');

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json())
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
// app.use(express.static('public'));
// app.use(route);

app.get('/', (req,res)=> {
    res.render('upload')
})


app.post('/upload', upload.single('filename'), (req,res) => {
  console.log(req.file.originalname);
  fileContent = fs.readFileSync("./uploads/" +  req.file.filename)
  const s3 = new AWS.S3();
  const params = {
    Bucket: BUCKET_NAME,
    Key: req.file.originalname,
    Body: fileContent
}

  s3.upload(params,function(err,data){
    if(err){
      console.log('fail2')
      throw err;
  }
    console.log("success");
    res.json({
        message: "file uploaded to S3",
        'location': data.Location
    })
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
