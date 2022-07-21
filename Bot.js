const TelegramBot = require('node-telegram-bot-api');
const token = '5532038023:AAHLKLGMyp0DRmFdi999HseI0fK2szIyvc0';

const bot = new TelegramBot(token, {polling: true});
const randomBoolean = () => Math.random() >= 0.5;
const message_id = 237771
const chatId = -1001464302418
bot.deleteMessage(chatId,message_id)
//if (randomBoolean = ture,is_pre=true) {
//bot.deleteMessage(chatId,message_id)    
//}
