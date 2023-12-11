const {Events, ActivityType, Client, GatewayIntentBits} = require('discord.js');

const client = new Client({intents: [GatewayIntentBits.Guilds]});

module.exports =
{
	name: Events.ClientReady,
	once: true,
  
	execute(client)
  {
		console.log(`Ready! Logged in as ${client.user.tag}`);

    client.user.setPresence(
    {
      activities:
      [{
        name: 'Dreamlab',
        type: ActivityType.Watching
      }]
    });
	},
};