import express from "express";
import brevo from "../config/brevo.js";

const router = express.Router();

router.post("/enroll", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const htmlContent = `
    <p>
      Thank you for showing interest in <strong>NexLume</strong>!
      We are excited to offer internship opportunities for passionate
      individuals eager to gain hands-on experience in a fast-growing
      startup environment.
    </p>

    <h3>🌟 How to Apply?</h3>
    <p>
      <a href="https://forms.gle/guHb8ZoeM1ybnSe98">
        Apply Here
      </a>
    </p>

    <h3>💡 Why Intern at NexLume?</h3>
    <ul>
      <li>Work on real projects</li>
      <li>Practical experience</li>
      <li>Mentorship & growth</li>
    </ul>
  `;

  try {
    await brevo.sendTransacEmail({
      sender: {
        email: process.env.FROM_EMAIL,
        name: process.env.FROM_NAME,
      },
      to: [{ email }],
      subject: "Exciting Team Opportunities at NexLume",
      htmlContent,
    });

    res.json({ message: "Enrollment email sent successfully" });
  } catch (error) {
    console.error(
      "BREVO FULL ERROR:",
      error?.response?.body || error
    );
    res.status(500).json({ message: "Email failed" });
  }
});

export default router;
