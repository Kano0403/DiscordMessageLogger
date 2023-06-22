const { Client, Events, GatewayIntentBits, Collection, DMChannel, EmbedBuilder} = require('discord.js')
const { token } = require('./config.json')

const client = new Client({intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]})

client.once('ready', async (c) => {
    console.log(`[EVENT] Bot ready! User: ${c.user.tag}`)
})


// * LOG MESSAGE DELETION
client.on('messageDelete', async (message) => {
    const msgDeleteEmbed = new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle('MESSAGE DELETE')
        .setAuthor({ name: 'NebulaLogger' })
        .addFields(
            { name: 'Content', value: `> ${message.content}` },
        )
        .addFields(
            { name: 'Channel', value: `<#${message.channel.id}>`}
        )
        .addFields(
            { name: 'Username', value: message.author.username, inline: true },
            { name: 'User ID', value: message.author.id, inline: true },
            { name: 'Message ID', value: message.id, inline: true }
        )
        .setTimestamp()
        .setFooter({ text: 'Created by Pclip Development' });

    const channel = await client.channels.fetch("1118690723936612535")
    channel.send({
        content: `DELETE: \`${message.author.username}\` (${message.author.id})`,
        embeds: [msgDeleteEmbed]
    })
})


// * LOG MESSAGE EDIT
client.on('messageUpdate', async (oldMsg, newMsg) => {
    const msgEditEmbed = new EmbedBuilder()
        .setColor(0x0000ff)
        .setTitle('MESSAGE EDIT')
        .setAuthor({ name: 'NebulaLogger' })
        .addFields(
            { name: 'Old Content', value: `> ${oldMsg.content}` },
        )
        .addFields(
            { name: 'New Content', value: `> ${newMsg.content}`}
        )
        .addFields(
            { name: 'Channel', value: `<#${oldMsg.channel.id}>`}
        )
        .addFields(
            { name: 'Username', value: oldMsg.author.username, inline: true },
            { name: 'User ID', value: oldMsg.author.id, inline: true },
            { name: 'Message ID', value: oldMsg.id, inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Created by Pclip Development' });

    const channel = await client.channels.fetch("1118690880421900330")
    channel.send({
        content: `EDIT: \`${oldMsg.author.username}\` (${oldMsg.author.id})`,
        embeds: [msgEditEmbed]
    })
})


client.login(token)