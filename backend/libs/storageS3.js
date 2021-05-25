const multer = require("multer")
const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    credentials: {
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET,
    },
});

const upload = multer().single("image")

module.exports = {
    upload: upload,
    s3: s3
}

/*
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.png')
    }
  })
   
  var upload = multer({ storage: storage })

  module.exports = upload
  */