const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Require routers
const apiRouter = require('./routes/api.js');
const loreRouter = require('./routes/lore.js');

app.get('/testerror', (req, res) => {
  throw new Error();
});

// Parse all incoming JSON
app.use(express.json());
app.use(express.urlencoded())

// Forward all requests at /api/lore to lore router
// app.use('/api/lore', loreRouter);

// Forward all rquests al /api to api router
app.use('/api', apiRouter);

// Catch all non-valid routes
app.use('/', (req, res) => {
  console.log("BEEP BOOP, You've entered the catch all");
  res.sendStatus(404);
});

// Global Error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {
      err: 'An error occured',
    },
  };
  const error = Object.create(defaultErr,  err);
  console.log(error.log);
  res.status(error.status).send(error.message);
});

// Start server on PORT
app.listen(PORT, () => {
  console.log(`BEEP BOOP, Listening on port ${PORT}`);
});

module.exports = app;
