const axios = require('axios');
const https = require('https');

const sendTextMessage = async (toPhoneNumber, messageBody) => {
  try {
    const response = await axios.post(
      'https://api.openphone.co/v1/messages',
      {
        to: toPhoneNumber,
        body: messageBody
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENPHONE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        httpsAgent: new https.Agent({  
          rejectUnauthorized: false  // Ignore SSL cert issues
        })
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending text:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = { sendTextMessage };
