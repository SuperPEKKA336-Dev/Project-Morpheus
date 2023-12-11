const {SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

module.exports =
{
	data: new SlashCommandBuilder()
		.setName('reactionroles')
		.setDescription('Creates a reaction role.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.addStringOption(option =>
			option.setName('type')
				.setDescription('The type of reaction role.')
				.setRequired(true)
				.addChoices(
        {
          name: 'Pronouns',
          value: 'roles_pronouns'
        },
        {
          name: 'Games',
          value: 'roles_games'
        },
        {
          name: 'Games 2',
          value: 'roles_games2'
        },
        {
          name: 'Hobbies',
          value: 'roles_hobbies'
        },
        {
          name: 'Pings',
          value: 'roles_pings'
        }))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to send the reaction roles in')
        .setRequired(true)),
  
	async execute(interaction)
  {
		const type = interaction.options.getString('type');
    const channel = interaction.options.getChannel('channel');

    if(type === 'roles_pronouns')
    {
      try
      {
        const pronouns_heHim = new ButtonBuilder()
          .setCustomId('pronouns_heHim')
          .setLabel('he/him')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '💙'
          });

        const pronouns_sheHer = new ButtonBuilder()
          .setCustomId('pronouns_sheHer')
          .setLabel('she/her')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '💜'
          });

        const pronouns_theyThem = new ButtonBuilder()
          .setCustomId('pronouns_theyThem')
          .setLabel('they/them')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '💚'
          });

        const pronouns_any = new ButtonBuilder()
          .setCustomId('pronouns_any')
          .setLabel('any')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🧡'
          });

        const pronouns_other = new ButtonBuilder()
          .setCustomId('pronouns_other')
          .setLabel('other')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '❤️'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(pronouns_heHim)
          .addComponents(pronouns_sheHer)
          .addComponents(pronouns_theyThem)
          .addComponents(pronouns_any)
          .addComponents(pronouns_other);
        
        channel.send(
        {
          embeds: [EMBEDS.PRONOUNS],
          components: [buttonRow]
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
    }else if(type === 'roles_games')
    {
      try
      {
        const games_counterstrike = new ButtonBuilder()
          .setCustomId('games_counterstrike')
          .setLabel('Counter-Strike')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178967372338561085');

        const games_fortnite = new ButtonBuilder()
          .setCustomId('games_fortnite')
          .setLabel('Fortnite')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178968419689824266');

        const games_leagueoflegends = new ButtonBuilder()
          .setCustomId('games_leagueoflegends')
          .setLabel('League of Legends')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178968774192406579');

        const games_minecraft = new ButtonBuilder()
          .setCustomId('games_minecraft')
          .setLabel('Minecraft')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178968952681013259');

        const games_overwatch = new ButtonBuilder()
          .setCustomId('games_overwatch')
          .setLabel('Overwatch')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178969079273508874');

        const buttonRow = new ActionRowBuilder()
          .addComponents(games_counterstrike)
          .addComponents(games_fortnite)
          .addComponents(games_leagueoflegends)
          .addComponents(games_minecraft)
          .addComponents(games_overwatch);
        
        channel.send(
        {
          embeds: [EMBEDS.GAMES],
          components: [buttonRow]
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
    }else if(type === 'roles_games2')
    {
      try
      {
        const games_rainbowsix = new ButtonBuilder()
          .setCustomId('games_rainbowsix')
          .setLabel('Rainbow SIx')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178970020710207498');

        const games_roblox = new ButtonBuilder()
          .setCustomId('games_roblox')
          .setLabel('Roblox')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178970515013120020');

        const games_rocketleague = new ButtonBuilder()
          .setCustomId('games_rocketleague')
          .setLabel('Rocket League')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178970639038677083');

        const games_valorant = new ButtonBuilder()
          .setCustomId('games_valorant')
          .setLabel('Valorant')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('1178970935999614976');

        const buttonRow = new ActionRowBuilder()
          .addComponents(games_rainbowsix)
          .addComponents(games_roblox)
          .addComponents(games_rocketleague)
          .addComponents(games_valorant)
        
        channel.send(
        {
          embeds: [EMBEDS.GAMES2],
          components: [buttonRow]
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
    }else if(type === 'roles_hobbies')
    {
      try
      {
        const hobbies_anime = new ButtonBuilder()
          .setCustomId('hobbies_anime')
          .setLabel('Anime')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🎎'
          });
        
        const hobbies_art = new ButtonBuilder()
          .setCustomId('hobbies_art')
          .setLabel('Art')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🎨'
          });
        
          const hobbies_streaming = new ButtonBuilder()
          .setCustomId('hobbies_streaming')
          .setLabel('Streaming')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '📺'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(hobbies_anime)
          .addComponents(hobbies_art)
          .addComponents(hobbies_streaming);
        
        channel.send(
        {
          embeds: [EMBEDS.HOBBIES],
          components: [buttonRow]
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
    }else if(type === 'roles_pings')
    {
      try
      {
        const announcements_pings = new ButtonBuilder()
          .setCustomId('announcements_pings')
          .setLabel('Announcements')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🔔'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(announcements_pings)
        
        channel.send(
        {
          embeds: [EMBEDS.ANNOUNCEMENTS],
          components: [buttonRow]
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
  }
}