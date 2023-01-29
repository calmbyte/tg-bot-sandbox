const bot = require('../bot');

const chats = {};

const messageOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '1', callback_data: 1 }, { text: '2', callback_data: 2 }, { text: '3', callback_data: 3 }],
      [{ text: '4', callback_data: 4 }, { text: '5', callback_data: 5 }, { text: '5', callback_data: 5 }],
      [{ text: '6', callback_data: 6 }, { text: '7', callback_data: 7 }, { text: '8', callback_data: 8 }],
      [{ text: '9', callback_data: 9 }]
    ],
  }),
};

async function guessNumber(msg) {
  const { chat: { id: chatId } } = msg;

  await bot.sendMessage(chatId, 'Guess number from 0 to 9');
  const randomNumber = Math.floor(Math.random() * 10);
  chats[chatId] = randomNumber;
  console.log(randomNumber);
  return bot.sendMessage(chatId, 'Try your luck', messageOptions);
}

async function handleGuessNumberAnswer(msg) {}

module.exports = { guessNumber, chats };