const {
  MessageEmbed,
  MessageButton,
  MessageActionRow
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  handlemsg
} = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["add"],
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let user = message.mentions.users.first() || client.user;
    if (user) {
      if (!user.bot) return interaction.reply({
        ephemeral: true,
        content: "<:no:833101993668771842> You can't Invite a Normal user! **IT MUST BE A BOT**"
      })

      let button_invite = new MessageButton().setStyle('LINK').setLabel("Invite " + user.username).setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
      //array of all buttons
      const allbuttons = [new MessageActionRow().addComponents([button_invite])]
      message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setTitle(`Invite: __**${user.tag}**__`)
          .setDescription(`||[*Click here for an Invitelink without Slash Commands*](https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot)||`)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
          .setFooter(client.getFooter(`${user.username} | Powered by Rawknee.69`, "https://imgs.search.brave.com/R0-pAk6mG9RE2D7q9IXUHFMoRRN57fy9NuoaEeABnA4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/Rmp4LURxVkxHcTU2/M3lWMzN3ZEl3SGFI/YSZwaWQ9QXBp"))
        ],
        components: allbuttons
      });
    }
  }
}
