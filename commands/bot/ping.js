import { MessageEmbed } from "discord.js";

export default {
    name: "ping",
    description: "ping gösterir",
    execute(message) {
        const discord_ping = message.client.ws.ping;
        const bot_ping = Math.abs(Date.now() - message.createdTimestamp);

        const response = new MessageEmbed().setColor("WHITE").addFields(
            {
                name: "Discord Ping",
                value: `${discord_ping} ms`,
                inline: true,
            },
            { name: "Bot Ping", value: `${bot_ping} ms`, inline: true }
        );

        message.reply({ embeds: [response] });
    },
};
