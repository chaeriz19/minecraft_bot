// auto generated javascript file with "npx tsc"

import mineflayer, { Bot } from 'mineflayer';
import mineflayerChat from 'mineflayer-chat';

const bot: Bot = mineflayer.createBot({
    host: "192.168.2.11",
    port: 50395,
    username: "bot"
});

function sendChatMessage(message: string) {
    bot.chat(message);
}
bot.once('spawn', () => {
    sendChatMessage('hi');
});

bot.on("chat", (player, message) => {
    if (player == bot.username) { return;}
    console.log(bot + player);
    switch (message) {
        case 'help':
            sendChatMessage("What can i do for you?");
            break;
    }
});