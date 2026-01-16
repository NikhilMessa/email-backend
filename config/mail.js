import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "apikey", // IMPORTANT: must be "apikey"
    pass: process.env.BREVO_SMTP_KEY, // xsmtpsib-...
  },
});

export default transporter;
