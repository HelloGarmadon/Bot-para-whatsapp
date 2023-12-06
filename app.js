const { create } = require("@open-wa/wa-automate");
const { Client } = require("undici-types");
const { cli } = require("winston/lib/winston/config");
const App = async client => {
  await client.onAnyMessage(async message => {
    if (message.text.includes("!figurinhas")) {
      await handleIMageToSticker(client, message);
    }
  });
};

//aalerta alerta alertaaaa
//aalerta alerta alertaaaa
//aalerta alerta alertaaaa
//aalerta alerta alertaaaa
//aalerta alerta alertaaaa talvez o codigo abaixo estreja errado

create().then(client => App(client));
