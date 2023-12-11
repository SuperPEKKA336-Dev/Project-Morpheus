const {Events} = require('discord.js');

const {EMBEDS, LEAVE} = require('../constants.json')

module.exports =
{
	name: Events.GuildMemberRemove,
  
	execute(member)
  {
		const channel = member.client.channels.cache.get('1178849082496794624');

    const embed = EMBEDS.LEAVE;

    embed.description = embed.description.replaceAll("%user", member.id);
    
    channel.send(
    {
      embeds: [embed]
    });
	},
};