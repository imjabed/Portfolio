const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://imabujabed.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { user_email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.myemail,
      pass: process.env.apppass
    }
  });

  const mailOptions = {
    from: user_email,
    to: process.env.myemail,
    subject,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send(error.toString());
  }
};
