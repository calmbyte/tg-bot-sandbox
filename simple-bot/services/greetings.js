const bot = require('../bot');

async function greetings(msg) {
  const { chat: { id: chatId } } = msg;
  await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4a4/2fd/4a42fdfb-4532-3040-b234-8ef9f153c2b8/3.webp');
  return bot.sendMessage(chatId, 'Hey, glad to see you here');
}

module.exports = { greetings };