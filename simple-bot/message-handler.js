const Commands = require('./commands');
const { greetings, whoami, unrecognized, guessNumber } = require('./services');

async function messageHandler(msg) {
  const { text } = msg;

  if (text === Commands.START) {
    return await greetings(msg);
  }

  if (text === Commands.WHOAMI) {
    return await whoami(msg);
  }

  if (text === Commands.GUESS_NUMBER) {
    return await guessNumber(msg);
  }

  return unrecognized(msg);
}

module.exports = { messageHandler };