'use strict';

module.exports = handler => async (req, res, next) => {
  try {
    await handler(req, res, next);
    if (next) {
      next();
    }
  } catch (e) {
    if (next) {
      next(e);
    }
    if (!res.headersSent) {
      const status = e.status || 500;
      if (e.toString) {
        res.status(status).send(e.toString());
      } else if (e.message) {
        res.status(status).send(e.message);
      } else {
        res.sendStatus(status);
      }
    }
  }
};
