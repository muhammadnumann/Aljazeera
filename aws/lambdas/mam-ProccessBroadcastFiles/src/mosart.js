const {parseXMLFile} = require('./utils');


const parseMosartXML = async (event) => {
  const mosartObject = await parseXMLFile(event.s3.object.key);
  return {
    mosart_rundown: mosartObject.Source.File._rundown,
    mosart_description: mosartObject.Source.File._description,
    mosart_time: mosartObject.Source.File._time,
    mosart_videoId: mosartObject.Source.File._outputName,
  };
}

module.exports = {
  parseMosartXML,
}
