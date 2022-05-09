import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

export default {
    name: "destek",
    description: "Botun destek sunucusunu gönderir",
    execute(message) {
        const row = new MessageActionRow().setComponents(
            new MessageButton()
                .setLabel("Destek sunucusuna katıl")
                .setStyle("LINK")
                .setURL("https://discord.gg/K8BHQbyv")
        );
        message.reply({ content: "Test Mesajı", components: [row] });
    },
};
