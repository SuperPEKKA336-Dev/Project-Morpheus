const {SlashCommandBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

module.exports =
{
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Gets the bot\'s ping'),
  
	async execute(interaction)
  {
    const embed = EMBEDS.PING;

    const sent = await interaction.reply(
    {
      embeds: [embed]
    });

    embed.description = `## Ping\n\nPing: \`${sent.createdTimestamp - interaction.createdTimestamp}ms\``;

    sent.edit(
    {
      embeds: [embed]
    })
  }
};