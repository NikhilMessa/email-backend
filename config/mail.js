import dotenv from "dotenv";
import nodemailer from "nodemailer";

// ✅ LOAD ENV HERE TOO
dotenv.config();

console.log("SMTP HOST:", process.env.BREVO_SMTP_HOST);
console.log("SMTP PORT:", process.env.BREVO_SMTP_PORT);
console.log("SMTP USER:", process.env.BREVO_SMTP_USER);

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

export default transporter;
