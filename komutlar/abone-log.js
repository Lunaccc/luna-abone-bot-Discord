const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("> Yetkiniz Bu Komudu Kulanmaya Yetmiyor")
)

if (args[0] === "sıfırla" || args[0] === "kapat") {
  db.delete(`log_${message.guild.id}`);
  message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
      .setDescription(`> Abone Log Kanalı Başarıyla Sıfırlandı.`)
  );
  return;
}
var kanal = message.mentions.channels.first()
if(!kanal){
    return message.channel.send(
        new Discord.MessageEmbed()
        .setTitle("| Abone Rol Sistem |")
        .setDescription("> Bir Log Kanalı Belirtmelisin Belirtmelisin.")
    )
}
db.set(`log_${message.guild.id}`, kanal.id)
      message.channel.send(
          new Discord.MessageEmbed()
          .setTitle("| Abone Rol Sistem |")
          .setDescription(`> Abone Log Kanalı Başarıyla ${kanal} Olarak Ayarlandı.`)
          )

    }    
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'log-kanal',
}