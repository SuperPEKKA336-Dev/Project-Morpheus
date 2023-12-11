const {Events} = require('discord.js');

const {EMBEDS, BANNED} = require('../constants.json')

module.exports =
{
	name: Events.GuildBanAdd,
  
	execute(member)
  {
		const channel = member.client.channels.cache.get('1178849082496794624');

    const embed = EMBEDS.BANNED;

    embed.description = embed.description.replaceAll("%user", member.user);
    
    channel.send(
    {
      embeds: [embed]
    });
	},
};