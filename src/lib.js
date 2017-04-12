'use strict';

module.exports = handler => async (req, res, next) => {
  try {
    await handler(req, res);
    if (next) {
      next();
    }
  } catch (e) {
    if (next) {
      next(e);
    }
    if (!res.headersSent) {
      res.sendStatus(e.status || 500);
    }
  }
};
