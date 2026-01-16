import express from "express";
import transporter from "../config/mail.js";

const router = express.Router();

router.post("/enroll", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    await transporter.sendMail({
      from: `"NexLume" <nexlume.co@gmail.com>`,
      to: email,
      subject: "Welcome to NexLume",
      html: `
        <p>Thank you for showing interest in <b>NexLume</b>!</p>
        <p>We will get back to you soon.</p>
      `,
    });

    return res.status(200).json({
      message: "Enrollment email sent successfully",
    });
  } catch (error) {
    console.error("SMTP ERROR:", error);
    return res.status(500).json({ message: "Email failed" });
  }
});

export default router;
