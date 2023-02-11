const Commands = require('./commands');
const { greetings, whoami, unrecognized, guessNumber } = require('./services');

async function messageHandler(msg) {
  const {
    text,
    chat: { id: chatId },
  } = msg;

  if (text === Commands.START) {
    return await greetings(msg);
  }

  if (text === Commands.WHOAMI) {
    return await whoami(msg);
  }

  if (text === Commands.GUESS_NUMBER) {
    return await guessNumber(chatId);
  }

  return unrecognized(msg);
}

module.exports = { messageHandler };
