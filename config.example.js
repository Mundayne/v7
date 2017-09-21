module.exports = {
  token: '', // Bot token goes here
  prefix: 'v7!', // Can be anything (used as default if no server prefix specified)
  devs: ['216399535390326794'], // Mundane
  /*
  * Server configs
  */
  '352057171413827585': { // Kush Returns
    logChannel: 'log-channel-id', // Channel to log commands to
    lobby: '353352859254784010',
    roles: {
      admin: '352161323624431617', // Admin role
      mod: '352161535159697408' // Mod role
    }
  },
  '307485565299720193': { // Vision7Gaming
    logChannel: '351523821620035604', // Channel to log commands to
    lobby: '307485565299720193',
    roles: {
      admin: 'admin-role-id', // Admin role         }
      mod: 'mod-role-id', // Mod role               |-> These roles are used for command permissions
      trusted: 'trusted-role-id', // Trusted role   }
      trial: '307489402593083392',
      guest: '352432951285252096' // Guest role
    }
  }
}
