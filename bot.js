const { Client, GatewayIntentBits, channelLink } = require('discord.js'); // Importa Discord.js
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Inicia sesión con el token del bot
client.login('MTM1OTI0OTAyNzU1MTU5Njc0NQ.G2-xQp.PcQ_GAuJkLHHe8QVYy0P-RBDJKWG1oyiOMVSQg'); // Pega el token que copiaste

client.once('ready', () => {
    console.log('¡El bot está listo!');
});

// Responde a los mensajes
client.on('messageCreate', (message) => {
    if (message.content === '¡Hola!') {
        message.reply('¡Hola! ¿Cómo estás?');
    }
});



// Evento cuando el bot está listo
client.once('ready', () => {
  console.log('¡El bot está listo!');
});
// Evento para dar la bienvenida a los nuevos miembros
client.on('guildMemberAdd', (member) => {
  // Obtén el canal de bienvenida por su nombre o ID
  const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenida'); // Cambia 'bienvenida' al nombre del canal que quieres usar

  // Si el canal existe, envía un mensaje de bienvenida
  if (channelLink) {
    channel.send(`¡Bienvenido/a al servidor, ${member.user.username}! 🎉`);
  }
});
