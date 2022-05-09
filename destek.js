import { MessageActionRow, MessageButton } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

export const data = {
    name: "destek",
    description: "Botun destek sunucusunu gönderir",
    execute(interaction) {
        const row = new MessageActionRow().setComponents(
            new MessageButton()
                .setLabel("Destek sunucusuna katıl")
                .setStyle("SUCCESS")
                .setURL("https://www.google.com.tr")
        );
        interactionreply({ content: "Test Mesajı", components: [row] });
    },
};

export const slash_data = new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description);
