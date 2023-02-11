require('dotenv').config();

const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
  const {
    text,
    chat: { id: chatId },
  } = msg;

  if (text === '/start') {
    await bot.sendMessage(
      chatId,
      'Press WebApp button 🤗 or press button below',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Open WebApp',
                web_app: { url: 'https://chic-caramel-3ac2c3.netlify.app/' },
              },
            ],
          ],
        },
      }
    );
  }
});
