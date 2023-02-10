const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("Yetkiniz Bu Komudu Kulanmaya Yetmiyor")
  )
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("Bir Yetkili Rollü Belirtmelisin")
  )
  
  
  db.set(`aboneyetkilisi_${message.guild.id}`, rol.id)
  message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription(`✅Yetkili Rolü Başarıyla Ayarlandı \n Yetkili Rolü:${rol}`)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-y-rol'],
  perm: 3
}
exports.help = {
  name: 'abone-yetkili-rol'
}
