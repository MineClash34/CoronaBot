module.exports = async (client) => {
    console.log(`Connecté sur ${client.guilds.size} serveurs, pour un total de ${client.users.size} users.`);
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: `&help | ${client.guilds.size} guilds | ${client.users.size} users`,
            type: "PLAYING"
        }
    });
    setInterval(function() {
      client.user.setPresence({
          game: {
              name: `&help | ${client.guilds.size} guilds | ${client.users.size} users`,
              type: "PLAYING"
          }
      });
    }, 300000)
}