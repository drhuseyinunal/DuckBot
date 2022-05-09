import { Client, Collection } from "discord.js";
import { readdirSync } from "fs";
import "dotenv/config";

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    presence: {
        status: "online",
        activities: [
            {
                name: "Sunucuyu",
                type: "WATCHING",
            },
        ],
    },
});

// Event Loader
readdirSync("./events").forEach(async (file) => {
    const event = await import(`./events/${file}`).then((m) => m.default);
    event(client);
});

// Commands Loader
client.commands = new Collection();
readdirSync("./commands").forEach((category) => {
    readdirSync(`./commands/${category}`).forEach(async (file) => {
        const command = await import(`./commands/${category}/${file}`).then(
            (c) => c.default
        );
        client.commands.set(command.name, command);
    });
});

client.login(process.env.token);
