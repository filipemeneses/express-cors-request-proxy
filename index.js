const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser());
app.use((req, res) => {
  if (!req.body) {
    res.json({
      ok: false,
      message: 'Missing JSON body with request options. Options documentation'
               + ' are found here: https://github.com/request/request',
    }, 500);
  }

  const options = req.body;

  try {
    request(Object.assign({
      method: 'GET',
    }, options), (error, _, body) => {
      if (error) {
        res.json({ ok: false, error: error.stack });
      } else {
        res.json({ ok: true, html: body });
      }
    });
  } catch (error) {
    res.json({ ok: false, error: error.stack });
  }
});

module.export = app;
