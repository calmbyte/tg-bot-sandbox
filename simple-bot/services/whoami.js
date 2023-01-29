const bot = require('../bot');

async function whoami(msg) {
  const {
    chat: { id: chatId },
    from: { first_name: firstName, last_name: lastName },
  } = msg;
  await bot.sendSticker(
    chatId,
    'https://tlgrm.ru/_/stickers/633/5c5/6335c5a3-81a4-3786-bb3c-701aa8335d38/4.webp'
  );
  return bot.sendMessage(chatId, `You're ${firstName} ${lastName}`);
}

module.exports = { whoami };