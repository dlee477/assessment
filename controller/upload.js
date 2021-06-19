const AWS = require('aws-sdk');
const ID = 'AKIA5T7AG6WMKAMF7THR';
const SECRET = '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';
const BUCKET_NAME = 'bcit-test';
const fs = require('fs');


exports.upload = (req,res)=> {
    let uploadFile = req.body.filename;
    const fileContent = fs.readFileSync(uploadFile);
    const s3 = new AWS.S3();

    const params = {
        Bucket: BUCKET_NAME,
        Key: uploadFile,
        Body: fileContent
    }
    
    s3.upload(params, function(err, data) {
        if(err){
            throw err;
        }
        console.log("success");
        console.log(data);
        res.json({
            message: "file uploaded to S3",
            'location': data.Location
        })
    })
    // console.log(res)
    // res.status(200).send()

    // res.render('upload');
}