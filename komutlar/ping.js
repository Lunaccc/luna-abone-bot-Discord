const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
    message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`> Gecikme Süresi: ${client.ws.ping}ms`)
    )
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ms'],
    perm: 3
  }
  exports.help = {
    name: 'ping'
  }