const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle contact form submission
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // Update with your SMTP configuration
      host: 'smtp.example.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Contact Form" <${email}>`, // sender address
      to: 'recipient@example.com', // list of receivers
      subject: 'New Message from Contact Form', // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error occurred:', error.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
