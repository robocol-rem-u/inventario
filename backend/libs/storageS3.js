const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    credentials: {
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET,
    },
});

module.exports = s3