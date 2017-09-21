const Braniac = require('../../src/index')

class Eval extends Braniac.Command {
  constructor (client) {
    super(client, {
      name: 'eval',
      displayName: '',
      aliases: ['exec', '>'],
      group: 'util',
      description: 'Executes JavaScript',
      info: 'Evaluates the provided text as pure JavaScript, returning the result.',
      usage: '<code>',
      perms: Braniac.Perms.dev
    })
  }

  run (bot, msg) {
    try {
      let code = this.paramify(msg).join(' ')
      let result = eval(code) // eslint-disable-line

      if (typeof result !== 'string') result = require('util').inspect(result)

      msg.reply(
        `\`\`\`js\n` +
        `--- in ---\n` +
        `${code}\n` +
        `--- out ---\n` +
        `${result}\n` +
        `\`\`\``
      ).catch(console.error)
    } catch (err) {
      msg.reply(`\`${err}\``).then(m => m.delete(10000).catch(console.error))
    }
  }
}
module.exports = Eval
