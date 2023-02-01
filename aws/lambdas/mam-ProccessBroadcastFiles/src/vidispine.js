const {parseXMLFile, buildXMLString, searchOnS3, moveFileOnS3, saveXMLFile} = require('./utils');

const vidispineFolder = process.env.vidispine;
const mosartFolder = process.env.mosart;

const upsertFile = async (metadata, videoId) => {
  const search = await searchOnS3(`${vidispineFolder}/video/${videoId}`);
  let itemData = {
    MetadataDocument: {
      _xmlns: "http://xml.vidispine.com/schema/vidispine",
      timespan: {
        _start: "-INF",
        _end: "+INF",
        field: []
      }
    }
  };
  if(search.Contents.length > 0) {
    itemData = await parseXMLFile(search.Contents[0].Key);
  }

  for(const [key, value] of Object.entries(metadata)) {
    const field = {
      name: key,
      value: value,
    }
    itemData.MetadataDocument.timespan.field.push(field);
  }
  const xmlData = buildXMLString(itemData);
  await saveXMLFile(`${vidispineFolder}/video/${videoId}.xml`, xmlData);
  return itemData;
}

const videoExists = async (videoId) => {
  const search = await searchOnS3(`${mosartFolder}/${videoId}.mp4`);
  return search.Contents.length > 0;
}

const getMetadata = async (videoId) => {
  const key = `${vidispineFolder}/video/${videoId}.xml`;
  return parseXMLFile(key);
}

const ingestVideo = async (videoId) => {
  const key = `${mosartFolder}/${videoId}.mp4`;
  const newKey = `${vidispineFolder}/video/${videoId}.mp4`;
  await moveFileOnS3(key, newKey);
}

module.exports = {
  upsertFile,
  videoExists,
  ingestVideo,
  getMetadata
}
