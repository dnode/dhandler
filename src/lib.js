'use strict';

module.exports = handler => async (req, res) => {
  try {
    await handler(req, res);
  } catch (e) {
    res.sendStatus(e.status || 500);
  }
};
