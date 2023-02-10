const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("Yetkiniz Bu Komudu Kulanmaya Yetmiyor")
  )
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(    
    new Discord.MessageEmbed()
  .setTitle("| Abone Rol Sistem |")
  .setDescription("Bir Log Kanalı Belirtmelisin Belirtmelisin")
  )
  
  
  db.set(`abonelog_${message.guild.id}`, log.id)
  message.channel.send(   
     new Discord.MessageEmbed()
  .setTitle("| Abone Rol Sistem |")
  .setDescription(`✅Abone Log Kanalı Başarıyla Ayarlandı \n Abone Rol Kanalı:${log}`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 3
}
exports.help = {
  name: 'abonelog'
}
