// auto generate javascript file with "npx tsc"

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
    sendChatMessage('/tellraw @a "a Bot has joined the server"');
});