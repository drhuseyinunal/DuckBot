import { MessageEmbed, MessageAttachment } from "discord.js";

export default (client) => {
    const prefix = process.env.prefix;
    // d-
    var komut = false; //eventlar burdan kontrol edilecek, event var mı yok mu
    client.on("messageCreate", (message) => {
        var msg = message.content;
        const img = new MessageAttachment(message.attachments[0], "test.jpg");
        if (message.content.startsWith(prefix) == false) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/); //prefixi mesajdan çıkar, boşlukları böl
        const commandName = args.shift().toLowerCase(); // prefix için büyük küçük harf duyarlılığını kaldırıyor
        const command = client.commands.get(commandName);

        if (msg.slice(0, 10) == "d-neyazdim") {
            console.log(`[${message.author.tag}]: ${args}`);
            komut = true;
        } else if (msg.slice(0, 8) == "d-gorsel") {
            if (message.attachments.size != 0) {
                message.channel.send(message.attachments.first().url); //? ilk resmin url'sini atar (Ama discord bunu da görsele çevirir)
                message.channel.send(`${message.attachments.first().url}`); //? Bunu görsele çevirmez
                message.channel.send(
                    message.attachments.map((a) => a.url).join("\n")
                ); //? Mesajda gönderilen her resmin linkini atar hatta alt satıra geçer bir de :)
            } else {
                message.reply("Görsel atmadın");
            }
            komut = true;
        } else if (msg.slice(0, 6) == "d-link") {
            const embed = new MessageEmbed().setDescription(
                "[Google](https://www.google.com)"
            );
            message.reply({ embeds: [embed] });
            komut = true;
        } else {
            komut = false;
        }

        if (!command && !komut) {
            return message.reply("Böyle bir komut yok");
        }

        if (command) {
            try {
                console.log(command);
                console.log(commandName, args); // sunucuda d-isim selam melam celam yazdığında hepsini terminale ayrı ayrı gönderiyor cevap olarak
                command.execute(message);
            } catch (e) {
                console.error(e);
                message.reply("Bu komut şu an için düzgün çalışmıyor");
            }
        }
    });
};
