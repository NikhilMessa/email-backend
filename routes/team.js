import express from "express";
import brevo from "../config/brevo.js";

const router = express.Router();

router.post("/enroll", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("BREVO KEY EXISTS:", !!process.env.BREVO_API_KEY);

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const response = await brevo.sendTransacEmail({
      sender: {
        email: process.env.FROM_EMAIL,
        name: process.env.FROM_NAME,
      },
      to: [{ email }],
      subject: "Welcome to NexLume",
      textContent: "Thank you for showing interest in NexLume.",
    });

    console.log("BREVO SUCCESS:", response);

    return res.status(200).json({
      message: "Enrollment email sent successfully",
    });
  } catch (error) {
    console.error("BREVO ERROR FULL:", error);
    console.error("BREVO ERROR BODY:", error?.response?.body);

    return res.status(500).json({
      message: "Email failed",
      error: error?.response?.body || error.message,
    });
  }
});

export default router;
