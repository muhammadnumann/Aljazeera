"use strict";
const execSync = require("child_process").execSync;
var ffmpeg = require('ffmpeg-static');
const { v4: uuidv4 } = require("uuid");
var fs = require('fs');

/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.extractImageFromVideo = (req, res) => {

  if (!req.body) {
    res.status(400).send(`Required fields: time, fileName and videoUrl!`);
    return;
  }

  const uuid = uuidv4().replace(/-/g, "");
  const { time, fileName, videoUrl, resolution, format } = req.body;
  const temporaryFile = `${uuid}.${format}`;
  const fullHd = "1920x1080";
  const command = `${ffmpeg} -y -ss ${time} -i "${videoUrl}" -s ${resolution || fullHd} -frames:v 1 ${temporaryFile}`;

  if (!time || !fileName || !videoUrl) {
    res.status(400).send(`Required fields: time, fileName and videoUrl!`);

    return;
  }

  if (!format || format === "jpg") {
    execSync(command, (error, stdout, stderr) => {
      console.log(
        "Cannot extract the image from video. ",
        error,
        stdout,
        stderr
      );
    });

    res.send({ file: `data:image/png;base64,${toBase64(`./${temporaryFile}`)}` });
  } else {
    res
      .status(400)
      .send(`Cannot export the image with the file format ${format}!`);
  }
};

function toBase64(file) {
  var binary = fs.readFileSync(file);
  return new Buffer(binary).toString('base64');
}