const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5021;

const corsOptions = {
  origin: 'http://localhost:3000', // your frontend's URL
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle contact form submission
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    let transporter = nodemailer.createTransport({
      host: 'mail.vogtech.ca',
      port: 465, // use the correct port for SSL
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your corporate email
        pass: process.env.EMAIL_PASS, // your email account's password
      },

    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Contact Form" <${email}>`, // sender address
      to: 'info@vogtech.ca', // list of receivers
      subject: 'New Message from Contact Form', // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error occurred:', error.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
