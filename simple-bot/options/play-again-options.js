module.exports = {
  againOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: 'Play again', callback_data: '/again' }]],
    }),
  },
};
