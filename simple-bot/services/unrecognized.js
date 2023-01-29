const bot = require('../bot');

function unrecognized(msg) {
  const { chat: { id: chatId } } = msg;

  return bot.sendMessage(chatId, "I don't understand...");
}

module.exports = { unrecognized };