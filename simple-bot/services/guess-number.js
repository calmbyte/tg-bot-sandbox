const bot = require('../bot');
const { messageOptions } = require('../options/game-options');

const chats = {};

async function guessNumber(chatId) {
  await bot.sendMessage(chatId, 'Guess number from 0 to 9');
  const randomNumber = Math.floor(Math.random() * 10);
  chats[chatId] = randomNumber;
  console.log(randomNumber);
  return bot.sendMessage(chatId, 'Try your luck', messageOptions);
}

async function handleGuessNumberAnswer(msg) {}

module.exports = { guessNumber, chats };
