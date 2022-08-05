const { EmbedBuilder, WebhookClient, } = require("discord.js");
const { Client , ReactionCollector, Channel, Message} = require("guilded.js");
const client = new Client({ token: process.env.guildedtoken });

const webhookplayers = new WebhookClient({id: process.env.webhookidplayers, token: process.env.webhooktokenplayers });
const webhookgfx = new WebhookClient({id: process.env.webhookidgfx, token: process.env.webhooktokengfx });
const webhookvfx = new WebhookClient({id: process.env.webhookidvfx, token: process.env.webhooktokenvfx });
const webhooksfx = new WebhookClient({id: process.env.webhookidsfx, token: process.env.webhooktokensfx });
const webhookother = new WebhookClient({id: process.env.webhookidsfx, token: process.env.webhooktokensfx });

client.on("ready", () => console.log("Bot is Working"));
client.on("messageCreated", (message) => {

    if (message.content === "bot.check") {
        message.reply('Bot is working!');
    }

    const messageId = message.id;
    const channel = new Channel(client,{ id: `c62f4b45-54ea-401a-9ead-6cda1dfb9c4d` });

    if (message.content === "!bot.forwardplayer") {
        message.send(`💎Hey Everyone new application has been submitted!\n⚠️Please react with the following 👍 or 👎 to get it redirected into Discord`)
        message.addReaction(90001164).then(() => message.addReaction(90001170).then(async function (message) {
    
    const reactions = new ReactionCollector(client, {
        max: 2,
        timeLimit: 50000,
        filter: (reaction) => {
            if(reaction.emote.name === "+1"){
                const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
                message.send(`➡️Redirecting...`)
                const lastmessage = channel.fetchMessage(messageId).then(lastmessage =>{
                webhookplayers.send({
                    content: `Hey <@&443184664014880769> New application has been approved by an administrator \nVote here`,
                    username: 'Player Application',
                    avatarURL: 'https://cdn.discordapp.com/attachments/452538620902113280/1004891817654894763/guilded_image_ee7cada8923d400e9be099bd3687dedf.png',
                    embeds: lastmessage.raw.embeds,
                });
                    
                });
                return false;
                
            }
            else if(reaction.emote.name === "-1"){
                const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
                message.send(`❌Redirection canceled.`);
                return false;
            }
            else return false;
    },
    }).start();
}));
};

if (message.content === "!bot.forwardgfx") {
    message.send(`💎Hey Everyone new application has been submitted!\n⚠️Please react with the following 👍 or 👎 to get it redirected into Discord`)
    message.addReaction(90001164).then(() => message.addReaction(90001170).then(async function (message) {

const reactions = new ReactionCollector(client, {
    max: 2,
    timeLimit: 50000,
    filter: (reaction) => {
        if(reaction.emote.name === "+1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`➡️Redirecting...`)
            const lastmessage = channel.fetchMessage(messageId).then(lastmessage =>{
            webhookgfx.send({
                content: `Hey <@&443185018756661248> New application has been approved by an administrator \nVote here`,
                username: 'Graphic Designer Application',
                avatarURL: 'https://cdn.discordapp.com/attachments/452538620902113280/1004891817654894763/guilded_image_ee7cada8923d400e9be099bd3687dedf.png',
                embeds: lastmessage.raw.embeds,
            });
                
            });
            return false;
            
        }
        else if(reaction.emote.name === "-1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`❌Redirection canceled.`);
            return false;
        }
        else return false;
},
}).start();
}));
};

if (message.content === "!bot.forwardvfx") {
    message.send(`💎Hey Everyone new application has been submitted!\n⚠️Please react with the following 👍 or 👎 to get it redirected into Discord`)
    message.addReaction(90001164).then(() => message.addReaction(90001170).then(async function (message) {

const reactions = new ReactionCollector(client, {
    max: 2,
    timeLimit: 50000,
    filter: (reaction) => {
        if(reaction.emote.name === "+1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`➡️Redirecting...`)
            const lastmessage = channel.fetchMessage(messageId).then(lastmessage =>{
            webhookvfx.send({
                content: `Hey <@&443184989354590208> New application has been approved by an administrator \nVote here`,
                username: 'Video Editor Application',
                avatarURL: 'https://cdn.discordapp.com/attachments/452538620902113280/1004891817654894763/guilded_image_ee7cada8923d400e9be099bd3687dedf.png',
                embeds: lastmessage.raw.embeds,
            });
                
            });
            return false;
            
        }
        else if(reaction.emote.name === "-1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`❌Redirection canceled.`);
            return false;
        }
        else return false;
},
}).start();
}));
};

if (message.content === "!bot.forwardsfx") {
    message.send(`💎Hey Everyone new application has been submitted!\n⚠️Please react with the following 👍 or 👎 to get it redirected into Discord`)
    message.addReaction(90001164).then(() => message.addReaction(90001170).then(async function (message) {

const reactions = new ReactionCollector(client, {
    max: 2,
    timeLimit: 50000,
    filter: (reaction) => {
        if(reaction.emote.name === "+1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`➡️Redirecting...`)
            const lastmessage = channel.fetchMessage(messageId).then(lastmessage =>{
            webhooksfx.send({
                content: `Hey <@&802997222831685653> New application has been approved by an administrator \nVote here`,
                username: 'Sound Designer Application',
                avatarURL: 'https://cdn.discordapp.com/attachments/452538620902113280/1004891817654894763/guilded_image_ee7cada8923d400e9be099bd3687dedf.png',
                embeds: lastmessage.raw.embeds,
            });
                
            });
            return false;
            
        }
        else if(reaction.emote.name === "-1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`❌Redirection canceled.`);
            return false;
        }
        else return false;
},
}).start();
}));
};

if (message.content === "!bot.forwardother") {
    message.send(`💎Hey Everyone new application has been submitted!\n⚠️Please react with the following 👍 or 👎 to get it redirected into Discord`)
    message.addReaction(90001164).then(() => message.addReaction(90001170).then(async function (message) {

const reactions = new ReactionCollector(client, {
    max: 2,
    timeLimit: 50000,
    filter: (reaction) => {
        if(reaction.emote.name === "+1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`➡️Redirecting...`)
            const lastmessage = channel.fetchMessage(messageId).then(lastmessage =>{
            webhookother.send({
                content: `Hey @everyone New application has been approved by an administrator \nVote here`,
                username: 'Application',
                avatarURL: 'https://cdn.discordapp.com/attachments/452538620902113280/1004891817654894763/guilded_image_ee7cada8923d400e9be099bd3687dedf.png',
                embeds: lastmessage.raw.embeds,
            });
                
            });
            return false;
            
        }
        else if(reaction.emote.name === "-1"){
            const message = new Message(client, {channelId: 'c62f4b45-54ea-401a-9ead-6cda1dfb9c4d'});
            message.send(`❌Redirection canceled.`);
            return false;
        }
        else return false;
},
}).start();
}));
};

    
});

client.login();