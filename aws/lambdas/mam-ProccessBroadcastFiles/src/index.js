const { parseINewsXML, renameINewsFile } = require("./inews");
const { parseMosartXML } = require("./mosart");
const { notify } = require("./notification");
const {
  upsertFile,
  ingestVideo,
  videoExists,
  getMetadata,
} = require("./vidispine");

exports.handler = async (event, context) => {
  console.info(
    `app=MAM;function=mam-ProccessBroadcastFiles;object=event;data=${JSON.stringify(
      event,
      null,
      2
    )}`
  );

  const input = event.Records[0];

  let xmlObject;
  let videoId;

  if (input.s3.configurationId === "inews") {
    xmlObject = await parseINewsXML(input);
    videoId = xmlObject.item_videoId;
    const newKey = await renameINewsFile(
      xmlObject.item_videoId,
      input.s3.object.key
    );
    if (newKey.includes("_")) {
      return `${newKey} skipped`;
    }
  }

  if (input.s3.configurationId === "mosart") {
    xmlObject = await parseMosartXML(input);
    videoId = xmlObject.mosart_videoId;
    if (xmlObject.mosart_videoId.includes("_")) {
      return `${xmlObject.mosart_videoId} skipped`;
    }
  }

  let item;

  if (input.s3.configurationId === "video") {
    videoId = input.s3.object.key.split("/").pop().split(".")[0];
    if (input.s3.object.size === 0) {
      await notify(input, context);
    }
    if (videoId.includes("_")) {
      return `${videoId} skipped`;
    } else {
      item = await getMetadata(videoId);
    }
  } else {
    item = await upsertFile(xmlObject, videoId);
  }

  if (item.MetadataDocument.timespan.field.length === 8) {
    const exists = await videoExists(videoId);
    if (exists) {
      await ingestVideo(videoId);
    } else {
      return `${videoId} skipped`;
    }
  } else {
    return `${videoId} skipped`;
  }

  return "Done!";
};
