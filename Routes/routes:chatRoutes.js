const express = require('express');
const router = express.Router();
const { chatWithAdvisor } = require('../services/openAIService');

// Example: POST /chat
router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const advisorReply = await chatWithAdvisor(message);
    res.json({ success: true, advisorReply });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
