const aws = require('aws-sdk');
const fs = require("fs");

const region = process.env.region;
const bucketName = process.env.bucket;

const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const s3 = new aws.S3({
  region: region,
  httpOptions: {
    timeout: 300000
  }
});

const parseOptions = {
  ignoreAttributes: false,
  arrayNodeName: "field",
  attributeNamePrefix: "_",
  format: true
};

const downloadFileFromS3 = (objectKey, filePath) => {

  console.log('downloading', bucketName, objectKey, filePath);

  return new Promise(function (resolve, reject) {
    const file = fs.createWriteStream(filePath),
      stream = s3.getObject({
        Bucket: bucketName,
        Key: objectKey
      }).createReadStream();

    stream.on('error', (e) => {
      if (e.code == 'NoSuchKey') {
        console.error('File not found');
      } else {
        reject(e);
      }
    });

    file.on('error', (e) => {
      console.error('Error writing file', e);
    });

    file.on('finish', function () {
      console.log('downloaded', bucketName, objectKey);
      resolve(filePath);
    });
    stream.pipe(file);
  });
}

const uploadFileToS3 = (objectKey, filePath, tagString = '') => {

  console.log('uploading', bucketName, objectKey, filePath);

  return s3.upload({
    Bucket: bucketName,
    Key: objectKey,
    Body: fs.createReadStream(filePath),
    ACL: 'private',
    ContentType: 'text/xml',
    Tagging: tagString
  }, (err) => {
    if (err) {
      console.log("S3UploadFailed", 500, `Couldn't upload the file at path ${filePath} to location s3://${bucketName}/${objectKey}`);
    }
  }).promise();
}

const moveFileOnS3 = (objectKey, newObjectKey) => {

  console.log('moving', bucketName, objectKey, newObjectKey);
  return s3.copyObject({
    Bucket: bucketName,
    CopySource: `${bucketName}/${objectKey}`,
    Key: newObjectKey,
    ACL: 'private',
    ContentType: 'text/xml'
  }, (err) => {
    if (err) {
      console.log("S3MoveFailed", 500, `Couldn't move the file at path ${objectKey} to location s3://${bucketName}/${newObjectKey}`);
    } else {
      console.log("S3MoveSuccess", 200, `Moved the file at path ${objectKey} to location s3://${bucketName}/${newObjectKey}`);
    }
  }).promise();
}

const searchOnS3 = async (prefix) => {
  const params = {
    Bucket: bucketName,
    Delimiter: '/',
    Prefix: prefix,
    MaxKeys: 100
  };

  return s3.listObjects(params).promise();
}

const deleteFileOnS3 = (objectKey) => {
  return s3.deleteObject({
    Bucket: bucketName,
    Key: objectKey
  }).promise();
}

const parseXMLFile = async (objectKey) => {
  const file = await downloadFileFromS3(objectKey, `/tmp/${objectKey.split('/').pop()}`);
  const xmlData = await fs.readFileSync(file, "utf8");
  const parser = new XMLParser(parseOptions);
  return parser.parse(xmlData);
}

const buildXMLString = (object) => {
  const builder = new XMLBuilder(parseOptions);
  return builder.build(object);
}

const saveXMLFile = async (objectKey, xmlString) => {
  const file = `/tmp/${objectKey.split('/').pop()}`;
  await fs.writeFileSync(file, xmlString);
  await uploadFileToS3(objectKey, file);
  return file;
}

module.exports = {
  downloadFileFromS3,
  uploadFileToS3,
  moveFileOnS3,
  parseXMLFile,
  buildXMLString,
  searchOnS3,
  deleteFileOnS3,
  saveXMLFile
}
