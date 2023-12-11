const {SlashCommandBuilder, Client, PermissionFlagsBits, GatewayIntentBits, EmbedBuilder} = require('discord.js');
const {EMBEDS} = require('../../constants.json');

module.exports =
{
	data: new SlashCommandBuilder()
		.setName('announcment')
		.setDescription('Sends an announcement')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
      option.setName('title')
        .setDescription('Title of the announcement')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('description')
        .setDescription('Description of the announcement')
        .setRequired(true))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to send the announcement in')
        .setRequired(true)),
    
	async execute(interaction)
  {
    const embed = EMBEDS.ANNOUNCEMENT;

    const title = interaction.options.getString('title');
    const description = interaction.options.getString('description');
    const author = interaction.user.username;
    const authorURL = interaction.user.displayAvatarURL();
    const channel = interaction.options.getChannel('channel');

    embed.title = title;
    embed.description = description;
    embed.author = 
    {
      name: author,
      iconURL: authorURL
    };

    try
    {
      channel.send(
      {
        embeds: [embed]
      });

      await interaction.reply(
      {
        embeds: [EMBEDS.SUCCESS],
        ephemeral: true
      });
    }catch(err)
    {
      await interaction.reply(
      {
        embeds: [EMBEDS.ERROR],
        ephemeral: true
      });
    }
  }
};