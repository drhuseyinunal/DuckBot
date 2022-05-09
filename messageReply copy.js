import { MessageEmbed } from "discord.js";

export default (client) => {
    const prefix = process.env.prefix;
    // d-

    client.on("messageCreate", (message) => {
        var msg = message.content;
        if (message.content.startsWith(prefix) == false) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/); //prefixi mesajdan çıkar, boşlukları böl
        const commandName = args.shift().toLowerCase(); // prefix için büyük küçük harf duyarlılığını kaldırıyor
        const command = client.commands.get(commandName);

        if (msg.slice(0, 10) == "d-neyazdim") {
            //? eğer neyazdım komutuysa
            console.log(`${message.author.tag}: ${args}`);
            message.reply("terminale bak");
        } else if (msg.slice(0, 6) == "d-link") {
            //? eğer bir önceki komut değilse ve komut link'se
            const embed = new MessageEmbed().setDescription(
                "[Google](https://www.google.com/)"
            );
            message.reply({ embeds: [embed] });
        } //üstteki if elselerden hiçbiri değilse
        else if (msg.slice(0, 6) == "d-destek") {
        } else {
            return message.reply("Böyle bir komut yok");
        }

        console.log(command);
        console.log(commandName, args); // sunucuda d-isim selam melam celam yazdığında hepsini terminale ayrı ayrı gönderiyor cevap olarak

        try {
            command.execute(message);
        } catch (e) {
            console.error(e);
            message.reply("Bu komut şu an için düzgün çalışmıyor");
        }
    });
};
