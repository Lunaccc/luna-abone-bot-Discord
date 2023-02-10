const Discord = require("discord.js")
const { measureText } = require("jimp")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
   new Discord.MessageEmbed()
   .setTitle("| Abone Rol Sistem |")
   .setDescription("> Yetkiniz Bu Komudu Kulanmaya Yetmiyor.")
 )
 if (args[0] === "sıfırla" || args[0] === "kapat") {
  db.delete(`abone_${message.guild.id}`);
  message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
      .setDescription(`> Abone Rolü Başarıyla Sıfırlandı.`)
  );
  return;
}
let rol = message.mentions.roles.first()
if(!rol){return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("| Abone Rol Sistem |")
    .setDescription("> Geçerli Bir Rol Belirtmelisin.")
)};
db.set(`abone_${message.guild.id}`,rol.id)
return message.channel.send(
new Discord.MessageEmbed()
.setTitle("| Abone Rol Sistem |")
.setDescription(`> Başarıyla Abone Rolü ${rol} Olarak Ayarlandı.`)
)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}
