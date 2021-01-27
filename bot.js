const Discord = require("discord.js")
const fs = require('fs')
const Enmap = require('enmap')
const client = new Discord.Client()
const mysql = require('mysql')
client.login("token")

/*Création des events*/

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
      if(file === "code.txt") return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

/*Création et enregistrement des commandes*/

client.commands = new Enmap();
const CommandsList = []
const HelpCommandsList = []

fs.readdir("./commandes/", (err, folders) => {
  if (err) return console.error(err);
  folders.forEach(folder => {
    if (folder === "Images" || folder === "lang") return;
  	fs.readdir("./commandes/" + folder + "/", (err, files) =>{
  	files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commandes/${folder}/${file}`);
    let commandName = file.split(".js")[0];
    console.log(`Chargement de la commande : ${commandName} en cours`);
    client.commands.set(commandName, props);
    CommandsList.unshift(commandName)
    if (folder !== "Admin") {
      HelpCommandsList.unshift(commandName)
    }
  });
  });
  });
});


const DBL = require('dblapi.js');
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTM3MzQwNjAzOTk2NTY5NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg3NTY2Mzc5fQ.QKZ5Lvn2VkibZVNQWSL-4uS9bqX89txeCseoyABOy5M", { webhookPort: 5000, webhookAuth: 'password' });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});

dbl.webhook.on('vote', vote => {
  var user = client.users.get(vote.user)
  if (!user) return;
  if (vote.isWeekend) {
    client.channels.get("702531867617919006").send(`Thanks to **${user.username}** to have voted for me on https://top.gg/bot/675373406039965697/vote ! *(X2 Week-End Bonus !)*`)
  } else {
    client.channels.get("702531867617919006").send(`Thanks to **${user.username}** to have voted for me on https://top.gg/bot/675373406039965697/vote !`)
  }
});


var con = mysql.createConnection({
  database: 'corona',
  host: "localhost",
  user: "root",
  password: "",
  encodage: "utf8mb4"
});


module.exports = {
  CommandsList: CommandsList,
  client: client,
  HelpCommand: HelpCommandsList,
  con: con
}

