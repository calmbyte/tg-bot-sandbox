const bot = require('./bot');

const { chats, guessNumber } = require('./services/guess-number');
const { againOptions } = require('./options/play-again-options');

async function callbackQueryHandler(query) {
  const {
    data,
    message: {
      chat: { id: chatId },
    },
  } = query;

  if (data === '/again') {
    return guessNumber(chatId);
  }

  if (chats[chatId] == data) {
    return bot.sendMessage(
      chatId,
      `You choose ${data}, It's correct`,
      againOptions
    );
  } else {
    return bot.sendMessage(
      chatId,
      `You choose ${data}, It's incorrect, the right answer is ${chats[chatId]}`,
      againOptions
    );
  }
}

module.exports = { callbackQueryHandler };
