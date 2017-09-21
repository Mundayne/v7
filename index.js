const config = require('./config')
const Braniac = require('./src/index')
const bot = new Braniac.Client(config, false)
const path = require('path')

bot.registerCommands(path.join(__dirname, 'cmd'))

bot.login(bot.config.token)

process.title = 'v7 Gaming - Braniac'

bot.on('guildMemberUpdate', (oldMember, newMember) => {
  let gldCfg = bot.config[newMember.guild.id]
  if (!gldCfg) return

  let roleID = gldCfg.roles.trial
  if (!roleID) return

  if (oldMember.roles === newMember.roles) return
  if (oldMember.roles.has(roleID) || !newMember.roles.has(roleID)) return

  newMember.guild.channels.get(gldCfg.lobby)
    .send(`@everyone, could we all welcome ${newMember} to the v7 family!`)
    .catch(console.error)
})
