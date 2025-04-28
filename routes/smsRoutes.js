const express = require('express');
const router = express.Router();
const { sendTextMessage } = require('../services/openPhoneService');

// Example: POST /send-text
router.post('/send-text', async (req, res) => {
  const { to, body } = req.body;

  try {
    const result = await sendTextMessage(to, body);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
