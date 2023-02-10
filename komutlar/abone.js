const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
let aboneyetkilisi = await db.fetch(`admin_${message.guild.id}`)
let abonelog = await db.fetch(`log_${message.guild.id}`)
let abonerol = await db.fetch(`abone_${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(
  new Discord.MessageEmbed()
  .setTitle("| Abone Rol Sistem |")
  .setDescription("> Abone Rol Belirtilmemiş")
)
  if(!abonelog) return message.channel.send(  
    new Discord.MessageEmbed()
  .setTitle("| Abone Rol Sistem |")
  .setDescription("> Abone Log  Belirtilmemiş")
)
  if(!aboneyetkilisi) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("> Abone Rol Yetkilisi  Belirtilmemiş")
  )
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("> Yetkiniz Bu Komudu Kulanmaya Yetmiyor")
  )
  
  if(!message.mentions.users.first()) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("> Bir Üye Etiketlemen Lazım")
  )
  
  await(abonekisi.roles.add(abonerol))
  
  const embed = new Discord.MessageEmbed()
  .setTitle("| Abone Rol Sistem |")
  .addField(`Rolü Veren Yetkili:`,`<@${message.author.id}>`, true)
  .addField(`Rolü Verilen Üye:`,` ${user}`, true)
  .setThumbnail(user.avatarURL())
  .setColor(`GOLD`)
  .setImage('https://share.creavite.co/6zE0CNldVkaM5YC6.gif');
  message.guild.channels.cache.get(abonelog).send(embed)

  const s = new Discord.MessageEmbed()
  .setTitle("| Abone Rol Sistem |")
  .setDescription(`Abone Rolü Başarıyla Verildi`)
  .setImage('https://share.creavite.co/6zE0CNldVkaM5YC6.gif');
  message.channel.send(s)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone'],
  perm: 3
}
exports.help = {
  name: 'a'
}
