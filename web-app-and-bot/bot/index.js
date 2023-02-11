require('dotenv').config();

const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
  const {
    text,
    chat: { id: chatId },
  } = msg;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Fill the form', {
      reply_markup: { keyboard: [[{ text: 'Fill the form' }]] },
    });
  }
});
