const bot = require('./bot');

const { chats } = require('./services/guess-number');

async function callbackQueryHandler(query) {
  const { data, message: { chat: { id: chatId } } } = query;

  if (chats[chatId] == data) {
    return bot.sendMessage(chatId, `You choose ${data}, It's correct`);
  } else {
    return bot.sendMessage(chatId, `You choose ${data}, It's incorrect, the right answer is ${chats[chatId]}`);
  }
}

module.exports = { callbackQueryHandler };