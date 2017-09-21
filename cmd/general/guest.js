const Braniac = require('../../src/index')

class Guest extends Braniac.Command {
  constructor (client) {
    super(client, {
      name: 'guest',
      displayName: 'guest',
      aliases: ['temp'],
      group: 'general',
      description: 'Makes the user a guest.',
      info: 'Either makes you a guest, or makes the specified user/s guest/s.',
      usage: '[@member...]',
      perms: Braniac.Perms.member
    })
  }

  run (bot, message) {
    let members = message.mentions.members || [message.member]
    if (members.length > 1 && !bot.memberPerms(message.message.member).includes(Braniac.Perms.mod)) return
    if (!bot.config[message.guild.id]) return
    let roleID = bot.config[message.guild.id].roles.guest
    if (!roleID) return
    let prefix = bot.config[message.guild.id].prefix || bot.config.prefix
    members.foreach(member => {
      member.addRole(roleID, `Added via '${prefix}guest' command.`).catch(console.error)
    })
  }
}
module.exports = Guest
