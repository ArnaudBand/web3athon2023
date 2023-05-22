// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    // Compose the email message
    const mailOptions = {
      from: 'your-email@example.com',
      to: 'recipient@example.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      // Email sent successfully
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      // Error sending email
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    // Only allow POST requests
    res.status(405).end();
  }
}
