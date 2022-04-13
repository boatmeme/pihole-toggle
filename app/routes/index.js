const express = require('express');
const pihole = require("pi-hole-remote");
const router = express.Router();

const url = process.env.PIHOLE_URL || 'http://pihole:8080'
const auth = process.env.PIHOLE_API_KEY || 'nonce'

/* GET home page. */
router.get('/', async (req, res) => {
  const stats = await pihole.callApi('summary', { url, auth })
  res.render('index', { title: 'pi-hole toggler' });
});

module.exports = router;
