const { decryptMedia } = require("@open-wa/wa-automate");

const handleIMageToSticker = async (client, message) => {
  if (!message.mimetype) {
    await client.sendText(message.from, "você não enviou um arquivo valido");
    return;
  } else {
    const mediaData = await decryptMedia(message);
    await client.sendImageAsSticker(message.from, mediaData);
  }
};

module.export = handleIMageToSticker;
