require('dotenv').config();

const bot = require('./bot');
const Commands = require('./commands');
const { messageHandler } = require('./message-handler');
const { callbackQueryHandler } = require('./callback-query-handler');

(() => {
  bot.setMyCommands([
    { command: Commands.START, description: 'Initial greetings' },
    { command: Commands.WHOAMI, description: 'Information about user' },
    { command: Commands.GUESS_NUMBER, description: 'Number guess simple game' },
  ]);

  bot.on('message', messageHandler);
  bot.on('callback_query', callbackQueryHandler);
})();
