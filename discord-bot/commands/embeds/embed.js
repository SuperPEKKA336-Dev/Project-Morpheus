const {SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

module.exports =
{
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Sends an embed.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.addStringOption(option =>
			option.setName('type')
				.setDescription('The embed.')
				.setRequired(true)
				.addChoices(
        {
          name: 'Rules',
          value: 'embed_rules'
        },
        {
          name: 'Info',
          value: 'embed_info'
        },
        {
          name: 'Services',
          value: 'embed_services'
        }))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to send the embed in')
        .setRequired(true)),
  
	async execute(interaction)
  {
		const type = interaction.options.getString('type');
    const channel = interaction.options.getChannel('channel');

    if(type === 'embed_rules')
    {
      try
      {
        channel.send(
        {
          embeds: [EMBEDS.RULES]
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
		}else if(type === 'embed_info')
    {
      try
      {
        channel.send(
        {
          embeds: [EMBEDS.INFO_1]
        });
        channel.send(
        {
          embeds: [EMBEDS.INFO_2]
        });
        channel.send(
        {
          embeds: [EMBEDS.INFO_3]
        });
        channel.send(
        {
          embeds: [EMBEDS.INFO_4]
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
    }else if(type === 'embed_services')
    {
      try
      {
        channel.send(
        {
          embeds: [EMBEDS.SERVICES_1]
        });

        channel.send(
        {
          embeds: [EMBEDS.SERVICES_2]
        });

        channel.send(
        {
          embeds: [EMBEDS.SERVICES_3]
        });

        channel.send(
        {
          embeds: [EMBEDS.SERVICES_4]
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
	},
};