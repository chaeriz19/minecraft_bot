"use strict";
// auto generated javascript file with "npx tsc"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mineflayer_1 = __importDefault(require("mineflayer"));
const bot = mineflayer_1.default.createBot({
    host: "192.168.2.11",
    port: 50395,
    username: "bot"
});
function sendChatMessage(message) {
    bot.chat(message);
}
bot.once('spawn', () => {
    sendChatMessage('hi');
});
bot.on("chat", (player, message) => {
    if (player == bot.username) {
        return;
    }
    console.log(bot + player);
    switch (message) {
        case 'help':
            sendChatMessage("What can i do for you?");
            break;
    }
});
