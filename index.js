// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
//const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


//let test = require(/commands/utility/ping.js);

//const dotenv = require('dotenv');

dotenv.config(); // recup les valeurs des variables

console.log(process.env.A); // va checher les variables dans le .env
console.log(process.env.B);
console.log(process.env.DISCORD_TOKEN);

// Log in to Discord with your client's token // avec le token du bot dcp ?
client.login(process.env.DISCORD_TOKEN); // on le met en bas car on a bs du .config pr acceder aux variables dcp on peut pas le faire
