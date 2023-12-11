const {Events} = require('discord.js');
const {EMBEDS, ROLE_IDS} = require('../constants.json');

module.exports =
{
	name: Events.InteractionCreate,
	async execute(interaction)
  {
		if(interaction.isChatInputCommand())
    {
			const command = interaction.client.commands.get(interaction.commandName);

			if(!command)
      {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try
      {
				await command.execute(interaction);
			}catch (error)
      {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}
    else if(interaction.isButton()) // Button interactions
    {
      const role = interaction.guild.roles.cache.get(ROLE_IDS[interaction.customId.toUpperCase()]);
  
      if(role)
      {
        const hasRole = interaction.member.roles.cache.has(role.id);
    
        if(hasRole)
          return interaction.member.roles
            .remove(role)
            .then((member) =>
              interaction.reply(
              {
                embeds: [EMBEDS.ROLE_REMOVED],
                ephemeral: true,
              })
            )
            .catch((err) =>
            {
              console.log(err);
              return interaction.reply(
              {
                embeds: [EMBEDS.ERROR],
                ephemeral: true,
              });
            });
        else
          return interaction.member.roles
            .add(role)
            .then((member) =>
              interaction.reply(
              {
                embeds: [EMBEDS.ROLE_ADDED],
                ephemeral: true,
              })
            )
            .catch((err) =>
            {
              console.log(err);
              return interaction.reply(
              {
                embeds: [EMBEDS.ERROR],
                ephemeral: true,
              });
            });
      }
    }else if(interaction.isStringSelectMenu()) // String Select Menu Interactions
    {
      /*
      try
      {
        const value = interaction.values;
        const COUNTERSTRIKE = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_COUNTERSTRIKE);
        const FORTNITE = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_FORTNITE);
        const LEAGUEOFLEGENDS = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_LEAGUEOFLEGENDS);
        const MINECRAFT = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_MINECRAFT);
        const OVERWATCH = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_OVERWATCH);
        const RAINBOWSIX = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_RAINBOWSIX);
        const ROBLOX = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_ROBLOX);
        const ROCKETLEAGUE = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_ROCKETLEAGUE);
        const VALORANT = interaction.guild.roles.cache.get(ROLE_IDS.GAMES_VALORANT);

        let roles = interaction.member.roles.cache

        let userRoles = roles
          .filter((roles) =>
            COUNTERSTRIKE.id)

        let isCounterstrike = false;
        let isFortnite = false;
        let isLeagueoflegends = false;
        let isMinecraft = false;
        let isOverwatch = false;
        let isRainbowsix = false;
        let isRoblox = false;
        let isRocketleague = false;
        let isValorant = false;
        
        for(let i = 0; i < value.length; i++)
        {
          if(value[i] == 'games_counterstrike')
            isCounterstrike = true;
          else if(value[i] == 'games_fortnite')
            isFortnite = true;
          else if(value[i] == 'games_leagueoflegends')
            isLeagueoflegends = true;
          else if(value[i] == 'games_minecraft')
            isMinecraft = true;
          else if(value[i] == 'games_overwatch')
            isOverwatch = true;
          else if(value[i] == 'games_rainbowsix')
            isRainbowsix = true;
          else if(value[i] == 'games_roblox')
            isRoblox = true;
          else if(value[i] == 'games_rocketleague')
            isRocketleague = true;
          else if(value[i] == 'games_valorant')
            isValorant = true;
        }

        if(!isCounterstrike)
          roles.delete(ROLE_IDS.GAMES_COUNTERSTRIKE);
        if(!isFortnite)
          roles.delete(ROLE_IDS.GAMES_FORTNITE);
        if(!isLeagueoflegends)
          roles.delete(ROLE_IDS.GAMES_LEAGUEOFLEGENDS);
        if(!isMinecraft)
          roles.delete(ROLE_IDS.GAMES_MINECRAFT);
        if(!isOverwatch)
          roles.delete(ROLE_IDS.GAMES_OVERWATCH);
        if(!isRainbowsix)
          roles.delete(ROLE_IDS.GAMES_RAINBOWSIX);
        if(!isRoblox)
          roles.delete(ROLE_IDS.GAMES_ROBLOX);
        if(!isRocketleague)
          roles.delete(ROLE_IDS.GAMES_ROCKETLEAGUE);
        if(!isValorant)
          roles.delete(ROLE_IDS.GAMES_VALORANT);
      
        return interaction.member.roles.set(roles)
          .then((member) =>
            interaction.reply(
            {
              embeds: [EMBEDS.ROLE_CHANGED],
              ephemeral: true,
            }))
      }catch(err)
      {
        console.log(err);
        return interaction.reply(
        {
          embeds: [EMBEDS.ERROR],
          ephemeral: true,
        });
      }*/
    }
	},
};