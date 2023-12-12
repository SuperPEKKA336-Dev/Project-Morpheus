const {SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

const discordLink = new ButtonBuilder()
  .setURL('https://discord.gg/JzPfZfP5Jg')
  .setLabel('Join!')
  .setStyle(ButtonStyle.Link);

const discordRow = new ActionRowBuilder()
  .addComponents(discordLink);

module.exports =
{
  // ./join [type]
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Gets information to join the specified server')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('The game')
				.setRequired(true)
				.addChoices(
        {
          name: 'Discord Server',
          value: 'join_discordServer'
        },
        {
          name: 'Minecraft Server',
          value: 'join_minecraftServer'
        },
        {
          name: 'Counter-Strike 2 Server',
          value: 'join_counterStrikeServer'
        },
        {
          name: 'Rainbow Six Siege Server',
          value: 'join_rainbowServer'
        })),
    
	async execute(interaction)
  {
		const type = interaction.options.getString('type');

    if(type === 'join_discordServer')
    {
      try
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.JOIN_DISCORD],
          components: [discordRow],
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
		}else if(type === 'join_minecraftServer')
    {
      try
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.JOIN_MINECRAFT],
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
		}else if(type === 'join_counterStrikeServer')
    {
      try
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.JOIN_COUNTERSTRIKE],
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
		}else if(type === 'join_rainbowServer')
    {
      try
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.JOIN_RAINBOW],
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
	},
};