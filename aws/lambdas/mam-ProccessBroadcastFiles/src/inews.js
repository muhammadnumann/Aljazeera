const {parseXMLFile, buildXMLString, searchOnS3, moveFileOnS3, deleteFileOnS3} = require('./utils');
const {convert} = require('html-to-text');

const inewsFolder = process.env.inews;

const parseINewsXML = async (event) => {
  const iNewsObject = await parseXMLFile(event.s3.object.key);
  const body = buildXMLString(iNewsObject.fields.body);
  return {
    item_description: convert(body),
    item_slug: iNewsObject.fields['slug-name'],
    item_airDate: iNewsObject.fields.airdate,
    item_videoId: iNewsObject.fields['video-id'],
  };
}

const renameINewsFile = async (videoId, key) => {
  const search = await searchOnS3(`${inewsFolder}/${videoId}`);
  const suffix = search.Contents.length > 0 ? `_${search.Contents.length}` : '';
  const newKey = `${inewsFolder}/${videoId}${suffix}.xml`;
  await moveFileOnS3(key, newKey);
  await deleteFileOnS3(key);
  return newKey;
}

module.exports = {
  parseINewsXML,
  renameINewsFile,
}
