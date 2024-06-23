const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

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
      // Update with your SMTP configuration
      //host: 'smtp.example.com',
      //port: 587,
      secure: false, // true for 465, false for other ports
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Contact Form" <${email}>`, // sender address
      to: 'venura.perera1999@gmail.com', // list of receivers
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
